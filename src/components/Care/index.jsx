import { Container } from "./styles"
import { BackButton } from "../backButton"

import {
  PiWhatsappLogo,
} from "react-icons/pi"

export const Care = ({
  text1 = "Banho",
  text2 = "Praia",
  text3 = "Piscina",
  text4 = "Quedas",
  text5 = "Perfumes",
  text6 = "Execícios",
  text7 = "Cosméticos",
  ...rest
}) => {
  return (
    <Container>
      <h2>Cuidados com a peça:</h2>
      <h3>Evtar:</h3>
      <br />
      <div>
        <ul>
          <li>{text1}</li>
          <li>{text2}</li>
        </ul>
        <ul>
          <li>{text3}</li>
          <li>{text4}</li>
        </ul>
        <ul>
          <li>{text5}</li>
          <li>{text6}</li>
        </ul>
        <ul>
          <li>{text7}</li>
        </ul>
      </div>
      <br />
      <p>
        Problemas com o seu pedido? Nos chame no WhatsApp
        <BackButton
          icon={<PiWhatsappLogo/>}
          text="Whatsapp"
          link="https://api.whatsapp.com/send/?phone=5519997844692&type=phone_number&app_absent=0"
          target="_blank"
        />
      </p>
    </Container>
  )
}
