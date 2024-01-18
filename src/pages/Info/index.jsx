import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Menu } from "../../components/menu"
import { Slider } from "../../components/slider"
import { Footer } from "../../components/footer"

import anhanguera from "../../assets/Icons/anhanguera.png"
import rocket from "../../assets/Icons/rocket.svg"
import matera from "../../assets/Icons/matera.webp"

export const Info = () => {
  return (
    <Container>
      <Anchor text="Sobre Mim" />

      <Menu />
      <main>
        <Header text="Você aqui é uma grande" span="Alegria" />

        <div>
          <Anchor text="Sobre mim" />
          <p>
            <span>Sua visita é muito importante para mim, obrigado!</span>
            <br />
            <br />
            Sou um entusiasta por Fotografia, Carros e Games.
          </p>

          <p>
            Atualmente estou cursando <span>Engenharia de Software</span> na
            Anhanguera, e <span>Desenvolvimento Full Stack</span> na Rocketseat:
          </p>
        </div>

        <Slider
          anchor="Formação"
          itemsConfig={[
            {
              icon: anhanguera,
              title: "Eng. Software",
              text1: "Bacharelado Anhanguera com o objetivo de ",
              span1: "aprender todas as etapas ",
              br1: true,
              text2: "do ",
              span2: "desenvolvimento de um software. ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
            {
              icon: rocket,
              title: "Rocketseat",
              text1: "Bootcamp de 1 ano aprendendo ",
              span1: "Programação baseada em JS. ",
              br1: false,
              text2: " Isso inclui: ",
              span2:
                "Javascript, React, Node, SQL, Frameworks e bibliotecas JS. ",
              br2: false,
              text3: "",
              span3: "",
              br3: false,
            },
            {
              icon: matera,
              title: "Matera Camp",
              text1:
                "Bootcamp da Matera de 1 semana, com o objetivo de aprender sobre ",
              span1: "Segurança da Informação ",
              br1: false,
              text2: "e ",
              span2: "Cloud. ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
          ]}
        />
      <Footer />
      </main>
    </Container>
  )
}