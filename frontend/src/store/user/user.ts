import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {io, Socket} from "socket.io-client";
import {TypeRootState} from "../store";
import { Mutex } from 'async-mutex';
import { userActions } from './userSlice';

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




const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: '/api' ,
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as TypeRootState).user.token
        if(token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError>= async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    debugger
    console.log(result)
    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshResult = await baseQuery(
                  '/refresh',
                  api,
                  extraOptions
                )

                if (refreshResult.data) {
                    debugger
                    console.log(refreshResult.data)
                    api.dispatch(userActions.setUser({token: refreshResult.data}));

                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(userActions.removeUser());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

let socket: Socket;
function getSocket() {
    if (!socket) {
        socket = io('https://realtime-messenger18.herokuapp.com', {
            withCredentials: true,
        });
    }
    return socket;
}

export const userApi = createApi({
    baseQuery: baseQueryWithReauth,
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
        logout: build.mutation<User, LoginResponse>({
            query: (body) => ({
                url: 'auth/logout',
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
        refreshToken: build.mutation<User, LoginResponse>({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                body
            }),
        }),
        getMessages: build.query<Message[], void>({
            query: () => 'posts',
            async onCacheEntryAdded(
                data,
                { cacheDataLoaded, cacheEntryRemoved, updateCachedData },
            ) {
                try {
                    await cacheDataLoaded;

                    const socket = io('https://realtime-messenger18.herokuapp.com');

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
