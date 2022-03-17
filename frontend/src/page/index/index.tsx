import React from 'react'
import { OperatorList } from '../../components/operatorList'
import Wrapper from '../../components/wrapper'
import {Title} from './style';

const Operators = [
    {id: 1, name: 'MTC'},
    {id: 2, name: 'beeline'},
    {id: 3, name: 'MTC'}
  ]

export const Index = () => {
    return (
        <Wrapper>
            <Title>Выберете оператора</Title>
            <OperatorList operators={Operators} />
        </Wrapper>
    )
}