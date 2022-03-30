import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ligth-grey);
  border-radius: 5px;
  padding: 20px;
  gap: 8px;
  width: 320px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

export const BtnInner = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  align-self: flex-start;
  padding: 12px 15px;
  border: 0;
  border-radius: 5px;
  background-color: var(--ligth-grey);
  font-size: 1.5rem;
  line-height: 1rem;

  &:focus, &:hover {
    opacity: .4;
  }

  &:disabled {
    background-color: var(--red-color);
  }
`;

export const A = styled(Link)`
  padding: 12px 15px;
  border-radius: 5px;
  background-color: var(--ligth-grey);
  font-size: 1.5rem;
  line-height: 1rem;

  &:focus, &:hover {
    opacity: .4;
  }
`;

export const Error = styled.p`
    color: var(--red);
`;
