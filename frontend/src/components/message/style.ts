import styled from "styled-components";

export const Inner = styled.div`
  display: flex;`

export const Container = styled.div`
  background-color: var(--ligth-grey);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 60%`

export const Header = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`
export const Name = styled.p`
  color: #C33364;
`

export const Data = styled.p`
  color: var(--grey-color);
  font-size: 1rem;
  line-height: 1rem;
`
export const Content = styled.p`
  overflow-wrap: anywhere;
`
