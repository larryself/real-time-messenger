import React, {FC} from 'react';
import {Wrap} from './style';

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper:FC<WrapperProps> = ({children}) => {
    return (
        <Wrap>
            {children}
        </Wrap>
    );
};

export default Wrapper;