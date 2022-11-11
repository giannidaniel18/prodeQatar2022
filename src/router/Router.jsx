import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Prode from "../pages/Prode";
import Ranking from "../pages/Ranking";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prode" element={<Prode />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}
