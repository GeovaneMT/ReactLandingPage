import styled from "styled-components";

export const Container = styled.button`
  color: ${({ $textColor, theme }) => $textColor || theme.COLORS.WHITE};
  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.COLORS.GRADIENT};
  display: flex;
  gap: 2.4vw;
  width: 75%;
  height: 5.6rem;
  border-radius: 20px;
  filter: opacity(1);

  &::before {
    content: "";
    border-radius: inherit;
    position: absolute;
    inset: 0;

    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.COLORS.WHITE},
      transparent 40%
    );
  }

  > a,
  div {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0.2rem;
    gap: 2.4vw;
    padding: 0 3.2rem;
    align-items: center;
    border-radius: inherit;
    color: ${({ $textColor, theme }) => 
      $textColor || theme.COLORS.WHITE};
    background: ${({ $backgroundColor, theme }) =>
      $backgroundColor || theme.COLORS.GRADIENT};
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      border-radius: inherit;
      inset: 0;
      width: 100%;
      height: 100%;
      transform: scaleX(1);
      transform-origin: right;
      transition: all 0.6s ease-in-out;
      z-index: -1;
      background: ${({ $backgroundColor, theme }) =>
        $backgroundColor || theme.COLORS.GRADIENT};
    }

    > p {
      transition: all 0.6s ease-in-out;

      &:nth-child(2) {
        opacity: 1;
        width: max-content;
        transition-delay: 0.6s;
      }
      &:last-child,
      &:nth-child(3) {
        opacity: 0;
        width: 0;
        transition: none;
      }
    }

    span > svg {
      transition: all 0.6s ease-in-out;

      &:first-child {
        opacity: 1;
        width: max-content;
        transition-delay: 0.6s;
      }

      &:last-child {
        opacity: 0;
        width: 0;
        animation: none;
      }
    }
  }

  &:hover,
  &:active {
    a,
    div {
      transform: scale(1);

      &::before {
        transform: scaleX(0);
        transform-origin: right;
        transition: all 0.6s ease-in-out;
        opacity: 0;
      }

      &::after {
        content: "";
        border-radius: inherit;
        position: absolute;
        inset: 0;
        filter: opacity(0.2);

        background: radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          ${({ theme }) => theme.COLORS.WHITE_50},
          transparent 40%
        );
      }

      > p {
        transition: all 0.6s ease-in-out;

        &:nth-child(2) {
          opacity: 0;
          width: 0;
          transition: none;
        }
        &:nth-child(3) {
          opacity: 1;
          width: max-content;
          transition-delay: 0.6s;
        }
      }
    }

    span > svg {
      transition: all 0.6s ease-in-out;

      &:first-child {
        opacity: 0;
        width: 0;
        transition: none;
      }
      &:last-child {
        opacity: 1;
        width: max-content;
        transition-delay: 0.6s;
      }
    }
  }

  @media screen and (min-width: 769px) {
    width: 100%;
  }
`
