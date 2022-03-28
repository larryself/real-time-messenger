import React from 'react';
import { Container, Link, Inner, Title } from './style';

export const NotFound = () => {
    return (
        <Container>
            <Inner>
                <Title>Page not found</Title>
                <Link href={'/'}>На главную</Link>
            </Inner>
        </Container>
    );
};

