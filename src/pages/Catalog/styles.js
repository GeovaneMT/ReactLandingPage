import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.VIOLET};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
    background: ${({ theme }) => theme.COLORS.BGGRADIENTDARK};
  }

  > main {
    justify-content: space-between;
  }
`
