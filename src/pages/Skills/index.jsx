import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Menu } from "../../components/menu"
import { Slider } from "../../components/slider"
import { Footer } from "../../components/footer"

import design from "../../assets/Icons/design.png"
import figma from "../../assets/Icons/figma.svg"
import notion from "../../assets/Icons/notion.svg"
import photoshop from "../../assets/Icons/photoshop.svg"
import kanban from "../../assets/Icons/kanban.svg"
import devops from "../../assets/Icons/devops.png"
import canvas from "../../assets/Icons/canvas.png"

export const Skills = () => {

  return (
    <Container>
      <Anchor text="Habilidades" />
      <Menu />
      <main>
        <Header text="Aqui estão minhas  " span="Habilidades" />
        <div>
          <p>
            <span>Venho estudando tecnologias Full Stack:</span>
            <br />
            <br />
            JavaScript, Node, React, API Restful, & Base de dados.
          </p>
        </div>
        <Slider />
        <div>
          <p>
            <span>Também estudo ferramentas UI | UX:</span>
            <br />
            <br />
            Design Thinking, Notion, Figma, e Photoshop.
          </p>
        </div>
        <Slider
          anchor="Ferramentas:"
          itemsConfig={[
            {
              icon: design,
              title: "Design Think",
              text1: "Design Think em Engenharia de Software, é ",
              span1: "humanizar o design ",
              br1: false,
              text2: "para o usuário, com o objetivo de entregar uma melhor ",
              span2: "compreensão ",
              br2: false,
              text3: "e ",
              span3: "navegação ",
              br3: false,
            },
            {
              icon: notion,
              title: "Notion",
              text1: "Ferramenta de ",
              span1: "fluxo de trabalho ",
              br1: true,
              text2: "colaborativa, para ",
              span2: "organizar informações, colaborar e manter o controle ",
              br2: false,
              text3: "de seus projetos ",
              span3: "",
              br3: false,
            },
            {
              icon: figma,
              title: "Figma",
              text1: "O Figma é uma ferramenta de ",
              span1: "prototipagem e design ",
              br1: false,
              text2: "colaborativa baseada na nuvem, para criar ",
              span2: "interfaces de usuário ",
              br2: false,
              text3: "e ",
              span3: "design responsivo ",
              br3: false,
            },
            {
              icon: photoshop,
              title: "Photoshop",
              text1: "Essencial para o web design devido à sua capacidade de ",
              span1: "edição e criação de elementos gráficos",
              br1: false,
              text2: "",
              span2: " ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
          ]}
        />
        <div>
          <p>
            <span>Também técnicas de gestão de projetos:</span>
            <br />
            <br />
            Scrum, Kanbam, e Business Model Canvas.
          </p>
        </div>
        <Slider
          anchor="Técnicas:"
          itemsConfig={[
            {
              icon: devops,
              title: "Scrum",
              text1: "uma Técnica ",
              span1: "agile ",
              br1: false,
              text2: "de Sprints que utiliza equipes auto-organizáveis e ",
              span2: "iterativas ",
              br2: false,
              text3: "para",
              span3: "desenvolver produtos e softwares com máxima eficiência",
              br3: false,
            },
            {
              icon: kanban,
              title: "Kanban",
              text1: "O Kanban é uma ",
              span1: "abordagem visual para gerenciar o trabalho. ",
              br1: false,
              text2: "Utiliza um quadro visual com colunas representando ",
              span2: "diferentes etapas do processo ",
              br2: false,
              text3: " ",
              span3: "",
              br3: false,
            },
            {
              icon: canvas,
              title: "Canvas",
              text1: "O Business Model Canvas é uma ",
              span1: "ferramenta visual ",
              br1: false,
              text2: "que descreve, de forma resumida, os ",
              span2: "principais elementos do modelo de negócios ",
              br2: false,
              text3: "",
              span3: "",
              br3: false,
            },
          ]}
        />
        <Footer />
      </main>
    </Container>
  )
}