import React, { useState } from "react"
import { Container } from "./styles"
import { allIcons } from "./allIcons"
import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsList } from "../../components/buttonsList"
import { ButtonsFilter } from "../../components/buttonsFilter"
import { BackButton } from "../../components/backButton"
import { Filters } from "./Filters"
import { PiArrowCircleLeft } from "react-icons/pi"

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

  const handleFilterClick = (filter) => {
    filterIcons(filter.category)
  }

  return (
    <Container>
      <Menu $backgroundColor={({ theme }) => theme.COLORS.PINK} />
      <Anchor text="Contato" />
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
          <ButtonsFilter
            socialIcons={Filters.slice(0, -1).map((filter) => ({
              ...filter,
              onClick: () => handleFilterClick(filter),
            }))}
            backgroundColor={({ theme }) => theme.COLORS.VIOLET}
          />
        )}

        <Footer />
      </main>
    </Container>
  )
}