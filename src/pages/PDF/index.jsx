import React, { useRef, useEffect, useState } from "react"
import html2pdf from "html2pdf.js"

import { Container } from "./styles"
import { Print } from "../Print"
import { BackButton } from "../../components/backButton"

export const PDF = () => {
  const containerRef = useRef(null)
  const [inputData, setInputData] = useState([]) // State to hold input data fetched from the database

  useEffect(() => {
    // Function to fetch input data from the database
    const fetchData = async () => {
      try {
        // Fetch data from the database
        const response = await fetch("your-database-endpoint")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        // Assuming data is an array of words
        setInputData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, []) // Fetch data only once when the component mounts

  useEffect(() => {
    // Function to fill inputs with words from the fetched data
    const fillInputs = () => {
      inputData.forEach((word, index) => {
        const input = containerRef.current.querySelector(
          `input:nth-child(${index + 1})`
        )
        if (input) {
          input.value = word
        }
      })
    }

    fillInputs()
  }, [inputData]) // Trigger filling inputs whenever inputData changes

  const handleDownload = () => {
    const options = {
      margin: 0.4,
      filename: "Home.pdf",
      image: { type: "png", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }
    const element = containerRef.current
    html2pdf().from(element).set(options).save()
  }

  return (
    <Container>
      <div style={{ display: "none" }}>
        <Print ref={containerRef} />
      </div>
      <BackButton text="Download" icon="" onClick={handleDownload} />
    </Container>
  )
}
