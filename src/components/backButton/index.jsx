import React, { useEffect } from "react"
import { Container } from "./styles"
import { Link } from "react-router-dom"

import { PiArrowCircleLeft } from "react-icons/pi"

export const BackButton = ({
  text = "Voltar",
  icon = <PiArrowCircleLeft />,
  link = "",
  target = "",
  ...rest
}) => {
  useEffect(() => {
    const handleBackButton = () => {
      // Redirect the user back to your website
      window.location.href = "https://beladona.netlify.app/Catalog"
    }

    // Add event listener for the browser's back button click
    window.addEventListener("popstate", handleBackButton)

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("popstate", handleBackButton)
    }
  }, [])
  return (
    <Container {...rest}>
      <Link to={link} target={target} rel="noopener noreferrer">
        {icon}
        {text}
      </Link>
    </Container>
  )
}
