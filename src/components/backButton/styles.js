import styled from "styled-components"

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.VIOLET};
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  width: max-content;
  gap: 0.8vw;
  padding: 0.8rem;
  border-radius: 20px;
  align-items: center;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.COLORS.VIOLET};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
