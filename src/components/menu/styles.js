import styled from "styled-components"
import theme from "../../styles/theme"
import { keyframes } from "styled-components"


const showContent = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 200%)
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0)
  }
`

const hideContent = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0%)
  }
  to {
    opacity: 0;
    transform: translate(-50%, 200%)
  }
`

export const MenuIcon = styled.span`
  color: ${({ $active }) =>
    $active === "true" ? theme.COLORS.WHITE : theme.COLORS.WHITE_50};
  cursor: ${({ $active }) => ($active === "true" ? "default" : "pointer")};
  transition: all 0.3s ease-in-out;
`

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  position: fixed;
  z-index: 2;
  justify-content: space-around;
  align-items: center;
  transform: translateX(-50%);
  width: 80%;
  height: 5.6rem;
  bottom: 32px;
  left: 50%;
  padding: 1.6rem 3.2rem;
  border-radius: 20rem;
  filter: drop-shadow(0px 4px 4px #020f20);

  &.show {
    opacity: 1;
    animation: ${showContent} 0.3s ease-in-out;
  }

  &.hide {
    opacity: 0;
    animation: ${hideContent} 0.3s ease-in-out;
  }

  svg {
    filter: drop-shadow(0px 4px 4px #020f20);
    font-size: 3.2rem;
  }

  a:hover span,
  a:active span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media screen and (min-width: 769px) {
    flex-direction: column;
    height: calc(75% - 8vh);
    width: 7vw;
    right: 0;
    bottom: 15%;
    left: inherit;
  }
`