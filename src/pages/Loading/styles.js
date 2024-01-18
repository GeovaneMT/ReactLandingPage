import styled, { keyframes } from "styled-components"

const loaderAnimation = keyframes`
  50% {
    height: 64px;
  }
`

export const Container = styled.div`
  overflow: hidden;
  pointer-events: none;

  .loader {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader div {
    background: ${({ theme }) => theme.COLORS.VIOLET};
    width: 16px;
    height: 32px;
    margin-left: 10px;
    animation: ${loaderAnimation} 1.2s infinite;
  }

  .loader div:first-child {
    animation-delay: -0.4s;
  }

  .loader div:nth-child(2) {
    animation-delay: -0.2s;
  }

  .loader div:last-child {
    animation-delay: 0s;
  }
`