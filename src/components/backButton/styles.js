import styled from "styled-components"

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.VIOLETCONTRAST};
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  width: max-content;
  gap: 0.8vw;
  padding: 0.8rem;
  border-radius: 20px;
  align-items: center;
  margin: 0 0 3.2rem 8vw;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.COLORS.VIOLETCONTRAST};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
