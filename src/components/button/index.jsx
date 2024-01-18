import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { PiArrowCircleRight } from "react-icons/pi"

export const Button = ({
  title = "Ir Para",
  fixedTitle = "Ir Para",
  icon = "",
  iconSize = "2.4rem",
  iconColor = "white",
  to = "",
  ...rest
}) => {

  const iconStyles = {
    fontSize: iconSize,
    color: iconColor,
  }
  
  return to ? (
    <Container>
      <Link target="_blank" rel="noreferrer" to={to} {...rest}>
        <span style={iconStyles}>
          {icon}
          <PiArrowCircleRight />
        </span>
        <p>{title}</p>
        <p>{fixedTitle}</p>
      </Link>
    </Container>
  ) : (
    <Container type="button" {...rest}>
      <span style={iconStyles}>{icon}</span>
      <p>{title}</p>
      <p>{fixedTitle}</p>
    </Container>
  )
}