import React from 'react';
import { Container, A, Inner, Title } from './style';

export const NotFound = () => {
    return (
        <Container>
            <Inner>
                <Title>Page not found</Title>
                <A to={'/'}>На главную</A>
            </Inner>
        </Container>
    );
};

