import styled from "styled-components";

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

export const Link = styled.a`
  color: var(--red-color);
  &:hover, &:focus{
    opacity: 0.4;
  }
`;
