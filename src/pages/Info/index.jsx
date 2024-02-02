import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Menu } from "../../components/menu"
import { Slider } from "../../components/slider"
import { Footer } from "../../components/footer"

//react icons / phosphor icons
import {
  PiShootingStarFill,
  PiEyeFill,
  PiSealCheckFill 
} from "react-icons/pi"

export const Info = () => {
  return (
    <Container>
      <Anchor text="Sobre Mim" />

      <Menu />
      <main>
        <Header text="Revele seu" span="Brilho!" />

        <div>
          <span>
            <Anchor text="Manifesto" />
          </span>
          <p>
            A Bela Dona Semijoias destaca-se por oferecer acessórios de alta
            qualidade a preços acessíveis, expressando a beleza única de cada
            mulher.
            <br />
            <br />
            Com uma abordagem personalizada e presença ativa nas redes sociais,
            a marca incentiva as clientes a expressarem confiança e
            autenticidade, convidando-as a serem protagonistas de suas
            histórias.
          </p>
        </div>

        <Slider
          anchor="Missão, Visão e Valores"
          itemsConfig={[
            {
              icon: "",
              iconAlt: <PiShootingStarFill />,
              title: "Valores",
              text1: "Priorizamos estabelecer relações de ",
              span1: "confiança, confiabilidade e respeito. ",
              br1: true,
              text2: "inspiramos as mulheres a serem ",
              span2: "protagonistas de suas histórias. ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
            {
              icon: "",
              iconAlt: <PiSealCheckFill />,
              title: "Missão",
              text1: "Oferecemos uma variedade de ",
              span1: "semijoias de alta qualidade. ",
              br1: true,
              text2: "prezando sempre proporcionar ",
              span2: "elegância e acessibilidade ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
            {
              icon: "",
              iconAlt: <PiEyeFill />,
              title: "Visão",
              text1: "Nossa visão futura e objetivo, é ser a ",
              span1: "principal referência em semijoias. ",
              br1: false,
              text2: "conquistando a confiança regional e ",
              span2: "expandindo nossa presença nacional  ",
              br2: true,
              text3: "através de um forte ",
              span3: "e-commerce.",
              br3: true,
            },
          ]}
        />
        <Footer />
      </main>
    </Container>
  )
}