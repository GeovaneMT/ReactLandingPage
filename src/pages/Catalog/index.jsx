import React, { useState, useEffect } from "react"
import { Container } from "./styles"
import { allIcons } from "./allIcons"
import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsList } from "../../components/buttonsList"
import { ButtonsFilter } from "../../components/buttonsFilter"
import { Filters } from "./Filters"

export const Catalog = () => {
  
  const [icons, setIcons] = useState(allIcons)
  const [activeFilter, setActiveFilter] = useState("")

  const filterIcons = (categoria) => {
    const filteredIcons = allIcons.filter((icon) =>
      icon.hiddenTitle.includes(categoria)
    )
    setIcons(filteredIcons)
    setActiveFilter(categoria)
  }

  return (
    <Container>
      <Menu $backgroundColor={({ theme }) => theme.COLORS.PINK} />
      <Anchor text="Contato" />
      <main>
        <ButtonsFilter
          socialIcons={Filters.map((filter) => ({
            ...filter,
            onClick: () => filterIcons(filter.category),
          }))}
          backgroundColor={({ theme }) => theme.COLORS.VIOLET}
        />

        <ButtonsList
          backgroundColor={({ theme }) => theme.COLORS.GRADIENTDARK}
          header="Confira nosso "
          span=""
          span3="Catálogo"
          socialIcons={icons}
          IconColor=""
        />

        <Footer />
      </main>
    </Container>
  )
}
