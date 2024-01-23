import React from "react"

// page styles and functions
import { SocialIcons } from "./socialIcons"
import { Container } from "./styles"
import { effect } from "./effect"

// modules
import { Button } from "../../components/button"

export const ButtonsFilter = ({
  socialIcons = SocialIcons,
  backgroundColor = "",
  onClick,
  textColor = "",
  ...rest
}) => {
  effect()

  return (
    <Container {...rest}>
      <main>
        <div id="cards">
          {socialIcons.map((button, index) => (
            <Button
              key={index}
              backgroundColor={backgroundColor}
              textColor={textColor}
              onClick={button.onClick}
              icon={button.icon}
              title={button.title}
              hiddenTitle={button.hiddenTitle}
              fixedTitle={button.fixedTitle}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}