import {Wrapper} from "../../components/wrapper";
import {Inner} from "./style";
import React, {useEffect} from "react";
import {useSignupMutation} from "../../store/user/user";
import {LoginForm} from "../../components/loginForm/loginForm";
import {useNavigate} from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [register, {data, isSuccess,isError,error}] = useSignupMutation();
    useEffect(()=>{
        if(isError){
            console.error(error)
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
                    title={'Создать аккаунт'}
                    btnTitle={'Создать'}
                    redirectLink={'/login'}
                    redirectLinkTitle={"Есть логин и пароль?"}
                    onSubmit={register}
                    error={error}
                />
            </Inner>
        </Wrapper>
    )
}
