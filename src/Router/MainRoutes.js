import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Component/Header";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import OtherPages from "../Page/OtherPages";
import Reference from "../Page/Reference";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="nos-metiers" element={<OtherPages />} />
          <Route path="bureaux" element={<OtherPages />} />
          <Route path="actualite" element={<OtherPages />} />
          <Route path="presse" element={<OtherPages />} />
          <Route path="reference" element={<Reference />} />
          <Route path="partenaire" element={<OtherPages />} />
          <Route path="ludique" element={<OtherPages />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
