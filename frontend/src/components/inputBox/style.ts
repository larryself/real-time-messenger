import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;`

export const Inner = styled.div`
  display: flex;
  border: 1px solid transparent;
`
export const Input = styled.input`
  width: 100%;
  background-color: var(--middle-grey);
  border-radius: 5px;
  border: 0;
  padding: 12px 15px;
  color: var(--white);

  &:hover, &:focus {
    background-color: rgb(64, 68, 99,1);
  }

  &::placeholder {
    color: var(--ligth-grey);
    font-size: 1.6rem;
  }
  
  &.invalid {
    box-shadow: 0 0 10px 1px rgb(255 0 0 / 70%);
  }
`
