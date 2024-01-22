import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { PiArrowCircleRight } from "react-icons/pi"

export const Button = ({
  title = "Título",
  fixedTitle = "Ir Para",
  icon = "",
  iconSize = "2.4rem",
  iconColor = "white",
  backgroundColor = "",
  to = "",
  onClick = () => console.log("Button clicked"),
  ...rest
}) => {
  
  if (!to) {
    return (
      <Container $backgroundColor={backgroundColor} onClick={onClick} {...rest}>
        <div to={to} {...rest}>
          <span style={{ fontSize: iconSize, color: iconColor }}>
            {icon}
            <PiArrowCircleRight />
          </span>
          <p>{title}</p>
          <p>{fixedTitle}</p>
        </div>
      </Container>
    )
  }

  const isExternalLink = to.startsWith("http") || to.startsWith("//")

  return (
    <Container $backgroundColor={backgroundColor} onClick={onClick} {...rest}>
      {isExternalLink ? (
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
      )}
    </Container>
  )
}
