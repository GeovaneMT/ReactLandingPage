import styled from "styled-components"

export const Container = styled.h2`
  font-size: ${({ theme }) => theme.COLORS.FSTITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: normal;

  > span {
    display: block;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.VIOLET};

    &:nth-child(3) {
      font-family: "billabong", sans-serif;
      font-weight: 100;
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
    }
    &:last-child {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
    }
  }
`
