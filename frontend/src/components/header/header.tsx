import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Wrapper } from '../wrapper';
import { useAction } from '../../hooks/useAction';
import { Header, Button, Container, Name } from './style';

export const PageHeader = () => {
    const {name} = useAppSelector(state => state.user);
    const {removeUser} = useAction();
    const signOut = () => {
        removeUser();
    }
    return (
            <Header>
                <Wrapper>
                    <Container>
                        <p>Вы вошли как: <Name>{name}</Name></p>
                        <Button onClick={signOut}>Выйти</Button>
                    </Container>
                </Wrapper>
            </Header>
    );
};



