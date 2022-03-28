import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  background-color: var(--middle-grey);
  border-radius: 5px;
  border: 0;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: #fff;
  border: 0;
  padding: 12px 15px;
`
export const Button = styled.button`
  padding: 10px 15px;
  border: 0;
  background-color: inherit;
  color: var(--ligth-grey);
  &:hover, &:focus {
    color: var(--white);
  }
  &:active {
    opacity: .3;
  }
`
