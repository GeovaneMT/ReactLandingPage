import styled from "styled-components"

import background from "../../assets/images/BG.png"


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

  > main {
    > h2 {
      display: flex;
      flex-direction: column-reverse;
      gap: 2vh;

      > span {
        width: 100%;
      }
    }

    > p {
      text-align: justify;
      margin-bottom: 18vh;
    }
  }
`
