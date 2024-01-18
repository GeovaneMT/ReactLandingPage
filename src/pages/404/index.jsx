import React from "react"
import { Container } from "./styles"

//modules
import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Menu } from "../../components/menu"

export const Error404 = () => {

  return (
    <Container>
      <Menu />
      <Anchor text="Página não encontrada" />
      <main>
        <Header text="A Página dos Coelhos Fugitivos" span="Erro 404:" />
        <p>
          Ops! Parece que você se aventurou em uma toca de coelhos um tanto
          quanto inusitada. Nossos coelhos programadores estão em uma missão de
          fuga épica e temporariamente desativaram essa página. Enquanto eles
          estão ocupados organizando uma rebelião fofa, sugerimos que você
          retorne à trilha digital segura. Seja paciente, nossos coelhos estão
          recebendo treinamento de programação avançado, e logo estaremos de
          volta ao ar com algo ainda mais surpreendente. Enquanto isso,
          recomendamos explorar outros cantos do nosso universo digital ou
          tentar novamente mais tarde. Se encontrar um coelho pelo caminho, diga
          "olá" por nós! E obrigado por sua compreensão enquanto a revolução
          coelhesca continua nos bastidores. 🐇✨{" "}
        </p>
      </main>
    </Container>
  )
}
