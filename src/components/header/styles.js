import styled from "styled-components"

import { Billabong } from "../../styles/fonts"

export const Container = styled.h2`
  ${Billabong}

  font-size: ${({ theme }) => theme.COLORS.FSTITLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: normal;

  > span {
    display: block;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.VIOLET};

    &:nth-child(3) {
      font-family: ${({ theme }) => theme.FONT.SIGNATURES};
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
