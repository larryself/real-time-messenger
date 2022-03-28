import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Link = styled.a`
  color: var(--red-color);
  &:hover, &:focus{
    opacity: 0.4;
  }
  `
