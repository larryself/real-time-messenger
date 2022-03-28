import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {io, Socket} from "socket.io-client";
import {TypeRootState} from "../store";
interface Message extends MessageResponse{
    id: number;
    created_at: string;
}

interface MessageResponse {
    to: string ;
    message: string;
}

export interface User extends LoginResponse{
    token: string,
    id: number,
}
interface LoginResponse {
    email: string,
    name: string,
    password: string
}
enum ChatEvent {
    SendMessage = 'send_message',
    RequestAllMessages = 'request_all_messages',
    SendAllMessages = 'send_all_messages',
    ReceiveMessage = 'receive_message',
}

let socket: Socket;
function getSocket() {
    if (!socket) {
        socket = io('https://real-timemessenger.herokuapp.com', {
            withCredentials: true,
        });
    }
    return socket;
}
export const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as TypeRootState).user.token
            if(token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: build => ({
        login: build.mutation<User, LoginResponse>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            }),
        }),
        signup: build.mutation<User, LoginResponse>({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                body
            }),
        }),
        sendMessage: build.mutation<Message, MessageResponse>({
            queryFn: (chatMessageContent: MessageResponse) => {
                const socket = getSocket();
                return new Promise(resolve => {
                    socket.emit(ChatEvent.SendMessage, chatMessageContent, (message: Message) => {
                        resolve({ data: message });
                    });
                })
            },
        }),
        getMessages: build.query<Message[], void>({
            query: () => 'posts',
            async onCacheEntryAdded(
                data,
                { cacheDataLoaded, cacheEntryRemoved, updateCachedData },
            ) {
                try {
                    await cacheDataLoaded;

                    const socket = io('https://real-timemessenger.herokuapp.com');

                    socket.on('connect', () => {
                        socket.emit(ChatEvent.RequestAllMessages);
                    });

                    socket.on(ChatEvent.ReceiveMessage, (message: Message) => {
                        updateCachedData((draft) => {
                            draft.push(message);
                        });
                    });

                    await cacheEntryRemoved;
                    socket.off('connect');
                } catch {
                }
            },
        }),
    }),
});
export const {useLoginMutation, useSignupMutation,useGetMessagesQuery, useSendMessageMutation} = userApi;
