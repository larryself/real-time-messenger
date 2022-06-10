import React, { FC } from 'react';
import { Wrap } from './style';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => (<Wrap>{children}</Wrap>);
