import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ligth-grey);
  border-radius: 5px;
  padding: 20px;
  gap: 8px;
  min-width: 320px;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`

export const Button = styled.button`
  align-self: flex-start;
  padding: 12px 15px;
  border: 0;
  border-radius: 5px;
  background-color: var(--ligth-grey);

  &:focus, &:hover {
    opacity: .4;
  }

  &:disabled {
    background-color: var(--red-color);
  }`

export const Error = styled.p`
  
    color:rgb(208,53,53);
`
