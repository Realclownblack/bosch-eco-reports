import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login";
import { BoxScan } from "./components/screen-scan/BoxScan";
import { BoxStatus } from "./components/screen-scan/BoxStatus";
import Anexar from "./pages/Anexar";

export const RoutesJS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/home" element={<Home />} />
        <Route path="/scan" element={<BoxScan />} />
        <Route path="/status" element={<BoxStatus />} />
        <Route path="/anexar" element={<Anexar />} />
      </Routes>
    </BrowserRouter>
  )
}