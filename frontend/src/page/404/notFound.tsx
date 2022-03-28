import React from 'react';
import { Container, Link } from './style';

export const NotFound = () => {
    return (
        <Container>
            <h1>Page not found</h1>
            <Link href={'/'}>На главную</Link>
        </Container>
    );
};

