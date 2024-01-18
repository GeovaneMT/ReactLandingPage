import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 32px;
  border-radius: 20px;
  z-index: 2;

  > p {
    margin-bottom: 14vh;
  }

  @media screen and (min-width: 769px) {

    > p {
      margin-bottom: 8vh;
    }
  }
`