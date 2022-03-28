import React from 'react';
import Messages from "../messages/messages";
import { Container, ChatInner } from "./style";
import ChatInput from "../chatInput/chatInput";

const Chat = ({messages, name}: any) => {
    return (
        <Container>
            <ChatInner>
                    {!!messages && <Messages messages={messages} name={name}/>}
                <ChatInput name={name}/>
            </ChatInner>
        </Container>
    );
};

export default Chat;
