import styled, { keyframes } from "styled-components"
import { Sansation } from "../../styles/fonts"

const showContent = keyframes`

  from {
    filter: blur(33px);
    opacity: 0;
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
`

export const Container = styled.div`
  ${Sansation}

  display: flex;
  flex-direction: column;
  gap: 7rem;
  width: 12rem;
  margin: 30rem 1.4rem 1.4rem 1.4rem;
  cursor: pointer;

  > main {
    display: none;
    flex-direction: column;
    gap: 4rem;
    width: 300px;

    > span {
      font-family: ${({ theme }) => theme.FONT.HEADER};
      font-size: ${({ theme }) => theme.COLORS.FSTITLE};
      color: ${({ theme }) => theme.COLORS.ROSE};
      justify-content: start;
      font-weight: bold;
      opacity: 0;
    }

    div:nth-child(2) {
      opacity: 0;
      color: ${({ theme }) => theme.COLORS.VIOLET};
    }
  }

  > div {
    width: 12rem;
    height: 12rem;
    border-radius: 20px;
    border: 2px solid white;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    margin-left: 2rem;

    &:hover,
    &:active {
      filter: opacity(1);
      transform: scale(1.3);
    }

    > div {
      display: flex;
      place-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  &.styled {
    > main {
      div,
      span {
        animation: ${showContent} 0.6s ease-in-out forwards;
      }

      div:nth-child(2) {
        animation-delay: 0.3s;
      }
    }

    > div {
      animation: ${showContent} 0.6s 0.6s ease-in-out forwards;
    }

    &:nth-child(n + 2) > div {
      animation-delay: 0.9s;
    }

    &:nth-child(n + 3) > div {
      animation-delay: 1.2s;
    }

    &:nth-child(n + 4) > div {
      animation-delay: 1.5s;
    }

    &:nth-child(n + 5) > div {
      animation-delay: 1.8s;
    }
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.VIOLET};
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
      width: 80%;
      height: 80%;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`
