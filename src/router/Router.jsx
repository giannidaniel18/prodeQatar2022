import React from "react";
import { Route, Routes } from "react-router-dom";
import Fecha from "../components/prode/Fecha";
import Home from "../pages/Home";
import Prode from "../pages/Prode";
import Ranking from "../pages/Ranking";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prode" element={<Prode />}>
        <Route path="grupos" element={<Fecha instancia="grupos" />} />
        <Route path="octavos" element={<Fecha instancia="octavos" />} />
        <Route path="cuartos" element={<Fecha instancia="cuartos" />} />
        <Route path="semifinal" element={<Fecha instancia="semifinal" />} />
        <Route path="final" element={<Fecha instancia="final" />} />
      </Route>
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}
