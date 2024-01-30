import React from "react"

import { Container } from "./styles"


export const Item = ({
  icon = "",
  iconAlt = "",
  title = "React ",
  text1 = "Tecnologia Front End para ",
  span1 = "Modularização de Componentes ",
  br1 = true,
  text2 = "e com bibliotecas de estilização como ",
  span2 = "Styled Components ",
  br2 = false,
  text3 = "e ",
  span3 = "Vite",
  br3 = false,
  ...rest
}) => {

  return (
    <Container {...rest}>
      <main>
        <div> {title}</div>
        <div>
          {text1}
          <span>{span1}</span>
          {br1 ? <br /> : null}
          {text2}
          <span>{span2}</span>
          {br2 ? <br /> : null}
          {text3}
          <span>{span3}</span>
          {br3 ? <br /> : null}
        </div>
      </main>
      <div>
        <div>
          {icon ? (
            <>
              <img src={icon} alt={title} />
            </>
          ) : (
            <p>{iconAlt}</p>
          )}
        </div>
      </div>
    </Container>
  )
}