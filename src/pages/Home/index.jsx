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
import profile from "../../assets/images/profile.png"

//react icons / phosphor icons
import {
  PiShootingStarFill,
  PiShoppingCartFill,
  PiTruckFill,
  PiStorefrontFill,
} from "react-icons/pi"

export const Home = () => {

  return (
    <Container>
      <Menu />
      <Anchor text="Home" />
      <main>
        <div>
          <div>
            <div>
              <img src={profile} alt="Logotipo Bela Dona Semijoias" />
            </div>
          </div>
          <div>
            <Header text="Bem vindo a " span="Bela Dona" span2="Semijoias" />
            <ul>
              <li>
                <PiShootingStarFill />
                Joias e Semijoias para você <span>brilhar!</span>
              </li>
              <li>
                <PiShoppingCartFill />
                Vendas para <span>varejo</span>
              </li>
              <li>
                <PiTruckFill />
                Enviamos para <span>todo o Brasil</span>
              </li>
              <li>
                <PiStorefrontFill />
                Loja física:
                <span>Rua São Pedro 622</span>
              </li>
              <li>
                <PiStorefrontFill />
                <span>Centro Vargem G.S - SP</span>
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