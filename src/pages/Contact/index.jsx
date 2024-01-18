import React from "react"

//page styles and functions
import { Container } from "./styles"

//modules
import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsContact } from "../../components/buttonsContact"

export const Contact = () => {

  return (
    <Container>
      <Menu />
      <Anchor text="Contato" />
      <main>
        <ButtonsContact />
        <Footer />
      </main>
    </Container>
  )
}
