import React, { useState, useEffect } from "react"
import { Container } from "./styles"
import { Anchor } from "../../components/anchor"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"
import { ButtonsList } from "../../components/ButtonsList"
import { ButtonsFilter } from "../../components/buttonsFilter"

import { PiBookOpenTextFill } from "react-icons/pi"

export const Catalog = () => {
  const allIcons = [
    {
      icon: <PiBookOpenTextFill />,
      title: "Aço Inox - Brincos",
      link: "https://photos.app.goo.gl/vpYFi1WpNBUoaFBe6",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Pulseiras",
      link: "https://photos.app.goo.gl/JjTkTE3nXDuV46Ww9",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brinco Infantil)",
      link: "https://photos.app.goo.gl/7EJeRyo7ELWPK7Be7",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brinco Ear Hook)",
      link: "https://photos.app.goo.gl/UYCQa9hi6PinkN8w9",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brinco Ear Cuff)",
      link: "https://photos.app.goo.gl/VjVD1VAQMYUjUxBm9",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brincos Pequenos)",
      link: "https://photos.app.goo.gl/jU1oFPDrBVnA8KES6",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Argolas)",
      link: "https://photos.app.goo.gl/C5CKgfwvzKB33K4t8",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brincos Grandes)",
      link: "https://photos.app.goo.gl/qaRY9gLhbVQa3FkC8",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Prata 925 - Brincos (Brincos de Trio)",
      link: "https://photos.app.goo.gl/Bf1eNFh1tPy78Tsz5",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brinco Ear Hook",
      link: "https://photos.app.goo.gl/DutDe3G2MUGWhFow5",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brinco Ear Cuff",
      link: "https://photos.app.goo.gl/HxY3RSMCHhZnPXbt8",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brincos Pequenos",
      link: "https://photos.app.goo.gl/kR1faSRbFwMh7Wio8",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brincos Infantil",
      link: "https://photos.app.goo.gl/jadXbrfH2rtBZsQ39",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brincos Grandes",
      link: "https://photos.app.goo.gl/uFAGxDA7v2pdoULd7",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Argolas",
      link: "https://photos.app.goo.gl/cz2vJ9bMgzHbc5NE9",
    },
    {
      icon: <PiBookOpenTextFill />,
      title: "Semijoias - Brincos de Trio",
      link: "https://photos.app.goo.gl/VZCrQ8Ev9PqWVA8D8",
    },
  ];
  const Filters = [
    {
      icon: "",
      title: " Prata 925",
      fixedTitle: "Filtrar",
      onClick: () => filterIcons("Prata 925"),
    },
    {
      icon: "",
      title: " Semijoias",
      fixedTitle: "Filtrar",
      onClick: () => filterIcons("Semijoias"),
    },
    {
      icon: "",
      title: " Aço Inox",
      fixedTitle: "Filtrar",
      onClick: () => filterIcons("Aço Inox"),
    },
    {
      icon: "",
      title: " Todos",
      fixedTitle: "Filtrar",
      onClick: () => filterIcons(""),
    },
  ]

  const [icons, setIcons] = useState(allIcons)
  const [activeFilter, setActiveFilter] = useState("")

  const filterIcons = (categoria) => {
    const filteredIcons = allIcons.filter((icon) =>
      icon.title.includes(categoria)
    )
    setIcons(filteredIcons)
    setActiveFilter(categoria)
  }

  useEffect(() => {
    // Reset filters when activeFilter changes
    if (activeFilter === "") {
      setIcons(allIcons)
    }
  }, [activeFilter])

  return (
    <Container>
      <Menu $backgroundColor={({ theme }) => theme.COLORS.PINK} />
      <Anchor text="Contato" />
      <main>
        <ButtonsFilter socialIcons={Filters} />
        <ButtonsList
          backgroundColor={({ theme }) => theme.COLORS.GRADIENTDARK}
          header="Confira nosso "
          span=""
          span3="Catálogo"
          socialIcons={icons}
        />
        <Footer />
      </main>
    </Container>
  )
}
