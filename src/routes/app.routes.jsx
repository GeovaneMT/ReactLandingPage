import React, { Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Loading } from "../pages/Loading"
import { useRouteLoader } from "./routeLoader"

export function AppRoutes() {

  const { components, isLoading } = useRouteLoader(useLocation())

  // Display loading page if still loading or components are not available
  if (isLoading || !components) {
    console.log("Loading page is being displayed")
    return <Loading />
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<components.Home />} />
        <Route path="/Info" element={<components.Info />} />
        <Route path="/Contact" element={<components.Contact />} />
        <Route path="/Skills" element={<components.Skills />} />
        <Route path="*" element={<components.Error404 />} />
      </Routes>
    </Suspense>
  )
}