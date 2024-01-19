import { Container } from "./styles"

export const Header = ({ text = "", span = "", span2 = "", span3 = "", ...rest }) => {
  return (
    <Container {...rest}>
      {text}
      <br />
      <span>{span}</span>
      <span>{span2}</span>
      <span>{span3}</span>
    </Container>
  )
}
