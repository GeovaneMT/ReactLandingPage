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
  backgroundColor = "",
  to = "",
  ...rest
}) => {
  const isExternalLink = to.startsWith("http") || to.startsWith("//")

  return (
    <Container $backgroundColor={backgroundColor} {...rest}>
      {to ? (
        isExternalLink ? (
          <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
            <span style={{ fontSize: iconSize, color: iconColor }}>
              {icon}
              <PiArrowCircleRight />
            </span>
            <p>{title}</p>
            <p>{fixedTitle}</p>
          </a>
        ) : (
          <Link to={to} {...rest}>
            <span style={{ fontSize: iconSize, color: iconColor }}>
              {icon}
              <PiArrowCircleRight />
            </span>
            <p>{title}</p>
            <p>{fixedTitle}</p>
          </Link>
        )
      ) : (
        <Container type="button" {...rest}>
          <span style={{ fontSize: iconSize, color: iconColor }}>{icon}</span>
          <p>{title}</p>
          <p>{fixedTitle}</p>
        </Container>
      )}
    </Container>
  )
}