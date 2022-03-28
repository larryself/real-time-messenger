import React, {FC} from 'react';
import { Container,Inner,Input } from './style';

interface InputBoxProps{
    placeholder: string,
    type?: string,
    label: string,
    name: string,
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    value : string;
    className?: string;
}

export const InputBox: FC<InputBoxProps> = ({placeholder,type = 'text',label,name, children, onChange, onBlur, value,className}) => {
    return (
        <Container>
            <label htmlFor={name}>
                {label}
            </label>
            <Inner>
                <Input
                    className={className}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}/>
                {children}
            </Inner>
        </Container>
    );
};
