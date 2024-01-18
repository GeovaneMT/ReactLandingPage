import { Container } from "./styles"

export const Header = ({ text = '', span = '', span2 = '', ...rest}) => {

  return <Container {...rest} >
  {text} 
  <br />
  <span>{span}</span>
  <span>{span2}</span>
  
  </Container>
}
