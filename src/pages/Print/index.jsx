import React, { forwardRef } from "react"
import { Container } from "./styles"

export const Print = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <div>
        <input type="text" />
      </div>
    </Container>
  )
})