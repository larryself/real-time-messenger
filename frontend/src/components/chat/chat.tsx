import React, { FC } from 'react';
import { Messages } from '../messages/messages';
import { Container, ChatInner } from './style';
import { ChatInput } from '../chatInput/chatInput';
import { MessagesType } from '../../types';

interface ChatProps {
    messages: MessagesType[],
    name: string,
}
export const Chat: FC<ChatProps> = ({messages, name})=> {
    return (
        <Container>
            <ChatInner>
                    {!!messages && <Messages messages={messages} name={name}/>}
                <ChatInput name={name}/>
            </ChatInner>
        </Container>
    );
};


