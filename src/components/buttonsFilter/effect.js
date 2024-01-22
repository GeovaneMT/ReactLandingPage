import { useEffect } from "react"

export const effect = () => {
  const handleMouseMove = (e) => {
    const buttonElements = document.querySelectorAll("button")

    for (const card of buttonElements) {
      const rect = card.getBoundingClientRect()
      const { clientX, clientY } = e
      const { left, top } = rect
      const x = clientX - left
      const y = clientY - top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  useEffect(() => {
    const cardsElement = document.getElementById("cards")

    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove)

      return () => {
        cardsElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])
}