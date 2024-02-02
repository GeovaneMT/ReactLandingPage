import styled from "styled-components"

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_50};
  padding: 32px 0;

  > h2,
  > h3 {
    line-height: 2.4rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > button {
      width: max-content;

      > a {
        margin: 0;
      }
    }
  }

  > div {
    gap: 2.4rem;
    display: flex;

    > section {
      gap: 2.4rem;
    }

    > ul > li {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media screen and (min-width: 769px) {
    
    width: 50%;

    > div > section {
        display: flex;
      }
    }
`