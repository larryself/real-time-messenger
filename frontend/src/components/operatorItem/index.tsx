import {FC} from 'react';
import { Container } from './style';

interface OperatorItemProps {
    name: string,
}

export const OperatorItem : FC<OperatorItemProps> = ({name}) => {
    return (
        <Container>
            {name}
        </Container>
    )
}