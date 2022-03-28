import React, {useEffect} from "react";
import {Wrapper} from "../../components/wrapper"
import {Inner} from "./style"
import {useLoginMutation} from "../../store/user/user";
import {LoginForm} from "../../components/loginForm/loginForm";
import {useNavigate} from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const [login, {data, isSuccess, isError, error, }] = useLoginMutation();
    useEffect(()=>{
        if(isError){
            console.log(error)
        }
    },[isError])
    useEffect(()=>{
        if(isSuccess) {

            navigate('/')
        }
    },[isSuccess])
    return (
        <Wrapper>
            <Inner>
                <LoginForm
                    title={'Войти'}
                    onSubmit={login}
                    redirectLink={'/signup'}
                    redirectLinkTitle={'Нет логина и пароля'}
                    btnTitle={'Войти'}
                    error={error}
                />
            </Inner>
        </Wrapper>
    )
}
