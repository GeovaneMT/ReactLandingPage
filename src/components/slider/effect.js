import { useEffect } from "react"

export const Effect = (mainRef, itemsConfig) => {
  useEffect(() => {
    const { current: selector } = mainRef
    const sliderItems = selector.querySelectorAll(".item")

    const handleItemClick = (item) => {
      sliderItems.forEach((item) => {
        item.classList.remove("styled")
      })

      requestAnimationFrame(() => {
        sliderItems.forEach((item) => {
          item.classList.add("styled")
        })
      })

      if (selector) {
        const firstItem = selector.querySelector(".item")

        if (firstItem && firstItem !== item) {
          selector.insertBefore(item, firstItem)
          selector.append(firstItem)
        }
      }
    }

    const itemClickHandler = (item, index) => () => {
      handleItemClick(item, itemsConfig[index])
    }

    const addEventListeners = () => {
      sliderItems.forEach((item, index) => {
        item.addEventListener("click", itemClickHandler(item, index))
      })
    }

    const removeEventListeners = () => {
      sliderItems.forEach((item, index) => {
        item.removeEventListener("click", itemClickHandler(item, index))
      })
    }

    addEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [itemsConfig, mainRef])
}