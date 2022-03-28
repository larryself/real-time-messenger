import React, { FC } from "react";
import { InputBox } from "../inputBox/inputBox";
import { Container, Title, Button, Error } from "./style";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Wrapper } from "../wrapper";
import { Inner } from "../../page/login/style";
import { validate } from "./validate";

interface LoginFormProps {
    title: string;
    btnTitle: string;
    redirectLink: string;
    redirectLinkTitle: string;
    onSubmit: (values: any)=> void;
    error: any;
}

export const LoginForm: FC<LoginFormProps> = ({title,btnTitle, redirectLink,redirectLinkTitle,onSubmit, error}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            handleSubmit(values)
        },
    });
    async function handleSubmit(values: {name: string, password: string, email: string}) {
        await onSubmit(values);
    }
    return (
        <Wrapper>
            <Inner>
                <Container onSubmit={formik.handleSubmit}>
                    <Title>{title}</Title>
                    <InputBox
                        placeholder={'example@example.ru'}
                        label={'Почта'}
                        name={'email'}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className = {formik.touched.email && formik.errors.email ? 'invalid': 'valid'}
                    />

                    <InputBox
                        placeholder={'example@example.ru'}
                        label={'Имя'}
                        name={'name'}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        className = {formik.touched.name && formik.errors.name ? 'invalid': 'valid'}
                    />
                    <InputBox
                        placeholder={'example'}
                        label={'Пароль'}
                        type={'password'}
                        name={'password'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        className = {formik.touched.password && formik.errors.password ? 'invalid': 'valid'}
                    />
                    <Button type={'submit'}>{btnTitle}</Button>
                    <Link to={redirectLink}>{redirectLinkTitle}</Link>
                    {error && <Error>{error.data.error}</Error>}
                </Container>
            </Inner>
        </Wrapper>
    )
}
