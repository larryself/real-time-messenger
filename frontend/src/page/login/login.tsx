import React, { useEffect } from 'react';
import { Wrapper, LoginForm } from 'components'
import { Inner } from './style'
import { useLoginMutation } from 'store/user/user';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, error, }] = useLoginMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])
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
