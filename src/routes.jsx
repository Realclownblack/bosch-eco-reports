import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login";
import { BoxStatus } from "./components/screen-scan/BoxStatus";
import Anexar from "./pages/Anexar";
import Arquivados from "./pages/Arquivados";

export const RoutesJS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/home" element={<Home />} />
        <Route path="/arquivados" element={<Arquivados />} />
        <Route path="/status" element={<BoxStatus />} />
        <Route path="/anexar" element={<Anexar />} />
      </Routes>
    </BrowserRouter>
  )
}