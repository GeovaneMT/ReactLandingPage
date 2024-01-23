import React from "react"
import { Container } from "./styles"
import { PiArrowCircleLeft } from "react-icons/pi"

export const BackButton = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <PiArrowCircleLeft /> Voltar
    </Container>
  )
}