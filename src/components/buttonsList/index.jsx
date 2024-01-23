import React from "react"

// page styles and functions
import { SocialIcons } from "./socialIcons"
import { Container } from "./styles"
import { effect } from "./effect"

// modules
import { Header } from "../../components/header"
import { Button } from "../../components/button"

export const ButtonsList = ({
  socialIcons = SocialIcons,
  header = "Sinta-se à vontade para entrar em ",
  span = "Contato",
  span3 = "",
  backgroundColor = "",
  IconColor = "",
  ...rest
}) => {
  effect()

  return (
    <Container {...rest}>
      <main>
        <Header text={header} span={span} span3={span3} />
        <div id="cards">
          {socialIcons.map((button, index) => (
            <Button
              backgroundColor={backgroundColor}
              key={index}
              icon={button.icon}
              $iconColor={button.iconColor || IconColor}
              title={button.title}
              to={button.link}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}