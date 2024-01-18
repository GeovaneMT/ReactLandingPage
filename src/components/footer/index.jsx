import { Container } from "./styles"

export const Footer = ({ text = "© 2023 Geovane M.T", ...rest }) => {
  return (
    <Container {...rest}>
      <p>{text}</p>
    </Container>
  )
}
