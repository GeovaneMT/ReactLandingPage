import styled from "styled-components"

export const Container = styled.h2`
  font-size: ${({ theme }) => theme.COLORS.FSTITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: normal;

  > span {
    display: block;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.VIOLET};
    &:last-child {
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
    }
  }
`