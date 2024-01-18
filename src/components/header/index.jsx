import { Container } from "./styles"

export const Header = ({ text = '', span = '', ...rest}) => {

  return <Container {...rest} >
  {text} 
  <br />
  <span>{span}</span>
  
  </Container>
}
