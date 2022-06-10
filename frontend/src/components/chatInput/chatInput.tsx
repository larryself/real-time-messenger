import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Container, Input, Button } from './style';
import { useSendMessageMutation } from 'store/user/user';

interface ChatInputProps {
  name: string;
}

export const ChatInput: FC<ChatInputProps> = ({ name }) => {
  const [message, setMessage] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.length > 0) {
      sendMessage({ to: name, message: message });
      setMessage('');
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <Input type={'text'} name={'message'} placeholder={'Ваше сообщение'} value={message}
             onChange={handleChange}/>
      <Button type={'submit'}>Отправить</Button>
    </Container>
  );
};

