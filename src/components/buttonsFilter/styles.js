import styled from "styled-components"

export const Container = styled.div`
  justify-content: space-between;

  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6vh;
    }
  }

  @media screen and (min-width: 769px) {
    > main {
      > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        &:hover > button:after,
        &:active > button:after {
          opacity: 1;
        }

        &:last-child > p {
          margin-bottom: 4vh;
        }

        button {
          height: 5vh;
        }
      }
    }
  }
`
