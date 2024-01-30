import React, { useState } from "react"

import { Container } from "./styles"

import { allIcons } from "./allIcons"
import { Filters } from "./Filters"

import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"

import { ButtonsList } from "../../components/buttonsList"
import { ButtonsFilter } from "../../components/buttonsFilter"
import { BackButton } from "../../components/backButton"

export const Catalog = () => {
  const [icons, setIcons] = useState(allIcons)
  const [activeFilter, setActiveFilter] = useState("")
  const [buttonsListVisible, setButtonsListVisible] = useState(false)

  const filterIcons = (categoria) => {
    const filteredIcons = allIcons.filter((icon) =>
      icon.hiddenTitle.includes(categoria)
    )
    setIcons(filteredIcons)
    setActiveFilter(categoria)
    setButtonsListVisible(true)
  }


  return (
    <Container>
      <Menu
        backgroundColor={({ theme }) => theme.COLORS.BACKGROUND}
        textColor={({ theme }) => theme.COLORS.ROSE}
        text50={({ theme }) => theme.COLORS.VIOLET}
        texthover={({ theme }) => theme.COLORS.ROSE}
        shadows={({ theme }) => theme.COLORS.PINK}
      />
      <Anchor text="Catálogo" />
      {buttonsListVisible && (
        <BackButton onClick={() => setButtonsListVisible(false)} />
      )}
      <main>
        {buttonsListVisible ? (
          <>
            <ButtonsList
              backgroundColor={({ theme }) => theme.COLORS.GRADIENTDARK}
              header="Confira nosso"
              span=""
              span3="Catálogo"
              socialIcons={icons}
              IconColor=""
            />
          </>
        ) : (
          <>
            <div />
            <ButtonsFilter
              socialIcons={Filters.slice(0, -1).map((filter) => ({
                ...filter,
                onClick: () => filterIcons(filter.category),
              }))}
              backgroundColor={({ theme }) => theme.COLORS.BACKGROUND}
              textColor={({ theme }) => theme.COLORS.VIOLETCONTRAST}
            />
          </>
        )}

        <Footer />
      </main>
    </Container>
  )
}