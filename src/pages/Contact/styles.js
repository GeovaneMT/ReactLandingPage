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
    justify-content: space-between;
  }
`
