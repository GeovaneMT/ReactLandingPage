import React from "react"

//page styles and functions
import { Container } from "./styles"

//modules
import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsContact } from "../../components/buttonsContact"

import {
  PiInstagramLogoFill,
  PiWhatsappLogoFill,
  PiBookOpenTextFill,
  PiFacebookLogoFill,
} from "react-icons/pi"

export const Catalog = () => {
  return (
    <Container>
      <Menu $backgroundColor={({ theme }) => theme.COLORS.PINK} />
      <Anchor text="Contato" />
      <main>
        <ButtonsContact
          header="Confira nosso "
          span=""
          span3="Catálogo"
          socialIcons={[
            {
              icon: <PiWhatsappLogoFill />,
              title: " test",
              link: "https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%2F%3Fphone%3D5519997844692%26type%3Dphone_number%26app_absent%3D0&e=AT1HfdqUR-Y_v9Nd4m8MmV8RCsxZndM4Ph9Xxm_GmSLd7TyXVciwO2ybhVw_WVS3Q27hMmkL5qxTvcWRFsVIzC9KlngaslMuqpA6lRQ",
            },
            {
              icon: <PiBookOpenTextFill />,
              title: " test",
              link: "/Contact",
            },
            {
              icon: <PiFacebookLogoFill />,
              title: " test",
              link: "https://www.facebook.com/BeladonasSemijoias/",
            },
            {
              icon: <PiInstagramLogoFill />,
              title: " test",
              link: "https://www.instagram.com/beladonassemijoias",
            },
          ]}
        />
        <Footer />
      </main>
    </Container>
  )
}
