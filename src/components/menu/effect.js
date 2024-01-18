import { useEffect } from "react"

export const effect = () => {
  useEffect(() => {
    const barra = document.querySelector(".barra")
    const main = document.querySelector("main")

    if (barra && main) {
      let lastScrollPosition = main.scrollTop

      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = main
        const goingUp = scrollTop < lastScrollPosition
        const atBottom = scrollHeight - scrollTop === clientHeight

        if (goingUp || atBottom) {
          barra.classList.remove("hide")
          barra.classList.add("show")
        } else {
          barra.classList.remove("show")
          barra.classList.add("hide")
        }

        lastScrollPosition = scrollTop
      }

      main.addEventListener("scroll", handleScroll)

      return () => main.removeEventListener("scroll", handleScroll)
    }
  }, [])
}