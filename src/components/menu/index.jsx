import React from "react"
import { useLocation, Link } from "react-router-dom"

import { Container, MenuIcon } from "./styles"
import { Icons } from "./icons"
import { effect } from "./effect"

export const Menu = ({ backgroundColor, textColor, text50, texthover, shadows, ...rest }) => {
  effect()

  return (
    <Container
      className="barra"
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $text50={text50}
      $shadows={shadows}
      $texthover={texthover}
      {...rest}
    >
      {Icons.map(({ icon, link, tooltip }, index) => {
        const isActive = useLocation().pathname === link
        return (
          <React.Fragment key={index}>
            {isActive ? (
              <MenuIcon $active="true" $textColor={textColor} title={tooltip}>
                {icon}
              </MenuIcon>
            ) : (
              <Link to={link}>
                <MenuIcon
                  $active="false"
                  $text50={text50}
                  $texthover={texthover}
                  title={tooltip}
                >
                  {icon}
                </MenuIcon>
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </Container>
  )
}
