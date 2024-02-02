import styled from "styled-components"

import background from "../../assets/images/BG.png"
import backgroundDark from "../../assets/images/BGdark.png"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  background-image: url(${background});

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
    background: ${({ theme }) => theme.COLORS.BGGRADIENT};
  }

  & > main > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    > span > p {
      text-align: left;
    }

    &:not(:last-child) > p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
      font-family: ${({ theme }) => theme.FONT.MAINLIGHT};
    }
  }

  > main > div:nth-child(2) {
    flex-direction: column;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
    // background-image: url(${backgroundDark});
    background: ${({ theme }) => theme.COLORS.VIOLET_50};
  }
`
