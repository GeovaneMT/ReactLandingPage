import React, { useRef } from "react"
import { Container } from "./styles"
import { ItemsConfig } from "./icons"
import { Anchor } from "../../components/anchor"
import { Item } from "../../components/sliderItem"
import { Effect } from "./effect"

export const Slider = ({
  anchor = "Tecnologias:",
  itemsConfig = ItemsConfig,
  ...rest
}) => {
  
  const mainRef = useRef(null)

  Effect(mainRef, itemsConfig)

  return (
    <Container {...rest}>
      <Anchor text={anchor} />

      <main className="main" ref={mainRef}>
        {itemsConfig.map((config, index) => (
          <Item key={index} className="item styled" {...config} />
        ))}
      </main>
    </Container>
  )
}
