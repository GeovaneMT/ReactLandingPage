import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  
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

    &:not(:last-child) > p {
      text-align: left;

      > span {
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.VIOLET};
      }

      &:nth-child(2) {
        > span {
          font-size: ${({ theme }) => theme.COLORS.FSSPAN};
        }
      }
    }
  }

  > main > div:nth-child(2) {
    flex-direction: column;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`