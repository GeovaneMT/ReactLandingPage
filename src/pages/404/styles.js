import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  > main {

    > h2 {
      display: flex;
      flex-direction: column-reverse;
      gap: 2vh;

      > span {
        width: 100%;
      }
    }

    > p {
      text-align: justify;
      margin-bottom: 18vh;
    }
  }
`
