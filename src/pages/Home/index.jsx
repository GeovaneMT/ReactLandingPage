import React from "react"

//page styles and functions
import { Container } from "./styles"

//modules
import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsContact } from "../../components/buttonsContact"

//general assets
import profile from "../../assets/images/profile.jpg"

//react icons / phosphor icons
import { PiUsersThree, PiCodeBlock, PiGear, PiBuildings } from "react-icons/pi"

export const Home = () => {

  return (
    <Container>
      <Menu />
      <Anchor text="Home" />
      <main>
        <div>
          <div>
            <div>
              <img src={profile} alt="Foto de perfil de Geovane" />
            </div>
          </div>
          <div>
            <Header text="Olá, eu sou " span="Geovane M.T" />
            <ul>
              <li>
                <PiUsersThree />
                Engenheiro de Software
              </li>
              <li>
                <PiCodeBlock />
                Desenv. Full Stack
              </li>
              <li>
                <PiGear />
                UI | UX Designer
              </li>
              <li>
                <PiBuildings />
                Administrador
              </li>
            </ul>
          </div>
        </div>
        <section>
          <ButtonsContact />
          <Footer />
        </section>
      </main>
    </Container>
  )
}