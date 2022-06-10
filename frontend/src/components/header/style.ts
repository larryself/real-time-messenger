import styled from 'styled-components';

export const Header = styled.header`
  flex: 0 0 auto;
  border-bottom: 1px solid var(--ligth-grey);
  height: var(--header-height);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--red-color);
  padding: 12px 15px;
  border-radius: 5px;

  &:focus {
    border-color: var(--red-color)
  }

  &:hover {
    color: var(--white);
    background-color: var(--red-color);
  }

  &:active {
    opacity: 0.3;
  }
`;

export const Name = styled.span`
  color: var(--red-color);
`;
