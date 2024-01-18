import styled from "styled-components"

export const Container = styled.h2`

font-size: ${({ theme }) => theme.COLORS.FSTITLE};
color: ${({ theme }) => theme.COLORS.WHITE};
font-weight: normal;

  > span {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }
`