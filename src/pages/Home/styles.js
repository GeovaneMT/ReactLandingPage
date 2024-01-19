import styled from 'styled-components'
import background from "../../assets/images/BG.png"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.BGGRADIENT};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${background});
    background-size: cover;
    filter: opacity(0.5);
    z-index: -1;
    overflow: hidden;
  }

  > main {
    gap: 0;
    padding-bottom: 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 8vh -13vw 0 -8vw;
      padding-bottom: 8vh;
      gap: 8vh;

      background: ${({ theme }) => theme.COLORS.BGGRADIENT};

      > div {
        &:first-child {
          position: relative;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          overflow: hidden;

          &::before {
            content: "";
            position: absolute;
            inset: -1rem 0rem;
            background: linear-gradient(
              315deg,
              transparent,
              transparent,
              transparent,
              transparent,
              ${({ theme }) => theme.COLORS.PINK},
              ${({ theme }) => theme.COLORS.ROSE},
              ${({ theme }) => theme.COLORS.PINK},
              transparent,
              transparent,
              transparent,
              transparent
            );
            animation: animate 4s linear infinite;
          }

          > div {
            position: absolute;
            inset: 0.1rem;
            

            > img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }

        &:last-child {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          ul {
            li {
              display: flex;
              gap: 4px;
              span {
                ${({ theme }) => theme.COLORS.PINK};
              }
            }

            li,
            h2 {
              text-shadow: 0px 4px 4px ${({ theme }) => theme.COLORS.VIOLET};
            }

            li svg {
              filter: drop-shadow(
                0px 4px 4px ${({ theme }) => theme.COLORS.VIOLET}
              );
              color: ${({ theme }) => theme.COLORS.VIOLET};
            }
            li:last-child svg {
              opacity:0
            }
          }
        }
      }

      > ul {
        width: max-content;
      }
    }

    > section {
      padding: 14vh 13vw 0 8vw;
      margin: 0 -13vw 13vh -8vw;
      display: flex;
      gap: 8rem;
      flex-direction: column;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
  }

  @media screen and (min-width: 769px) {
    > main > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  @keyframes showContent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }
  @keyframes animate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`