import React from "react"

//page styles and functions
import { SocialIcons } from "./socialIcons"
import { Container } from "./styles"
import { effect } from "./effect"

//modules
import { Header } from "../../components/header"
import { Button } from "../../components/button"

export const ButtonsContact = ({
  socialIcons = SocialIcons,
  header = "Sinta-se à vontade para entrar em ",
  span = "Contato",
  span3 = "",
  ...rest
}) => {
  effect()

  return (
    <Container>
      <main>
        <Header text={header} span={span} span3={span3} />
        <div id="cards">
          {socialIcons.map((button, index) => (
            <Button
              key={index}
              icon={button.icon}
              title={button.title}
              to={button.link}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}