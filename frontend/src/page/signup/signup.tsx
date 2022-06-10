import React, { useEffect } from 'react';
import { Wrapper, LoginForm } from 'components';
import { Inner } from './style';
import { useSignupMutation } from 'store/user/user';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [register, { isSuccess, error }] = useSignupMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])
  return (
    <Wrapper>
      <Inner>
        <LoginForm
          title={'Создать аккаунт'}
          btnTitle={'Создать'}
          redirectLink={'/login'}
          redirectLinkTitle={'Есть логин и пароль?'}
          onSubmit={register}
          error={error}
        />
      </Inner>
    </Wrapper>
  )
}
