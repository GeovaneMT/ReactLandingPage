import React from "react"
import { useLocation, Link } from "react-router-dom"

import { Container, MenuIcon } from "./styles"
import { Icons } from "./icons"
import { effect } from "./effect"

export const Menu = ({ backgroundColor, ...rest }) => {
  effect()

  return (
    <Container className="barra" $backgroundColor={backgroundColor} {...rest}>
      {Icons.map(({ icon, link, tooltip }, index) => {
        const isActive = useLocation().pathname === link
        return (
          <React.Fragment key={index}>
            {isActive ? (
              <MenuIcon $active="true" title={tooltip}>
                {icon}
              </MenuIcon>
            ) : (
              <Link to={link}>
                <MenuIcon $active="false" title={tooltip}>
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
