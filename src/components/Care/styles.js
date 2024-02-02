import styled from "styled-components"

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_50};
  width: 50%;
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

    > button > a {
      margin: 0;
    }
  }

  > div {
    display: flex;
    gap: 2.4rem;
  }
`
