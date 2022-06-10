import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;`

export const A = styled(Link)`
  color: var(--red-color);

  &:hover, &:focus {
    opacity: 0.4;
  }
`;
