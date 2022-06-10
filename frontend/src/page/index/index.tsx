import React from 'react'
import { Wrapper } from 'components/wrapper'
import { useAppSelector } from 'hooks/useAppSelector';
import { PageHeader, Chat } from 'components';
import { Main } from './style';
import { useGetMessagesQuery } from 'store/user/user';

export const HomePage = () => {
  const { data, isFetching } = useGetMessagesQuery();
  const { name } = useAppSelector(state => state.user);
  return (
    <>
      <PageHeader/>
      <Main>
        <Wrapper>
          {data && !isFetching && name && <Chat messages={data} name={name}/>}
        </Wrapper>
      </Main>
    </>
  )
}
