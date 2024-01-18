import styled from "styled-components"

export const Container = styled.div`
  p {
    text-align: left;
  }

  > main {
    display: flex;

    > div:first-child {
      pointer-events: none;
      margin-top: 50px;

      > div {
        margin-left: 0;
        filter: opacity(1);
        transform: scale(1.4);
        border: none;

        //here//
        position: relative;
        overflow: hidden;
        box-shadow: -16px 16px 32px 0px #020f20;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          inset: -1rem 0rem;
          background: linear-gradient(
            315deg,
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BLUE},
            ${({ theme }) => theme.COLORS.CYAN},
            ${({ theme }) => theme.COLORS.BLUE},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BACKGROUND}
          );
          animation: animate 4s linear infinite;
        }

        > div {
          position: absolute;
          background: #020f20;
          width: 95%;
          height: 95%;
          border-radius: 20px;
          border: 1px solid ${({ theme }) => theme.COLORS.CYAN};
;
          background: ${({ theme }) => theme.COLORS.BACKGROUND};
          padding: .2rem;
        }
        //here//
      }

      > main {
        display: flex;
      }
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