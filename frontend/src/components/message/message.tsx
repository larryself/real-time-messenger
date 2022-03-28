import React, {FC} from 'react';
import { Inner,Container, Header, Name, Data, Content } from './style';
import {MessagesType} from "../../types";

interface MessageProps {
    message: MessagesType;
    name: string;
}

export const Message:FC<MessageProps> = ({message,name}) => {
    const isYou  = name === message.to ;
    const dateConverter = (date: string) => {
        const currentDate = new Date(date);
        const time = `${currentDate.getHours()}`.padStart(2,'0') + ':' + `${currentDate.getMinutes()}`.padStart(2,'0');

        return `${currentDate.getDate()}`.padStart(2,'0') + '.' + `${currentDate.getMonth()}`.padStart(2,'0') + '.' + currentDate.getFullYear() + ' ' + time;
    }
    return (
        <Inner style={{justifyContent: isYou ? 'flex-end': 'flex-start'}}>
            <Container>
                <Header>
                    <Name>{message.to}</Name>
                    <Data>{dateConverter(message.created_at)}</Data>
                </Header>
                <Content>{message.message}</Content>
            </Container>
        </Inner>
    );
}
