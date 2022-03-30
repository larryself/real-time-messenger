import React, { FC, useEffect, useRef } from 'react';
import { Message } from '../message/message';
import { List } from './style';
import { MessagesType } from '../../types';

interface MessagesProps {
    messages: MessagesType[];
    name: string;
}

export const Messages:FC<MessagesProps> = ({messages,name}) => {
    const messagesContainer = useRef<null | HTMLUListElement>(null);

    useEffect(() => {
        if(messagesContainer.current){
            messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
        }

    }, [messages,messagesContainer]);
    return (
        <>
            <List ref={messagesContainer}>
            {messages.map((message)=>(
                <li key={message.id}>
                    <Message message={message} name={name}/>
                </li>
            ))}
            </List>
        </>
    );
};

