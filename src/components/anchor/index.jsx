import { Container } from "./styles"

export const Anchor = ({ text = "", ...rest }) => {
  return (
    <Container
    {...rest}>
      
      {text}
    </Container>
  )
}