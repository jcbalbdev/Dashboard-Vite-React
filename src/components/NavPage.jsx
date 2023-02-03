import React from "react";
import { Routes, Route } from "react-router-dom";
import Libros from '../pages/Libros'
import Editorial from '../pages/Editorial'
import Catalogo from '../pages/Catalogo'
import Home from '../pages/Home'
import Lenguaje from '../pages/Lenguaje'
import Autor from '../pages/Autor'
import Genero from '../pages/Genero'



const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenguaje" element={<Lenguaje />} />
        <Route path="/libro" element={<Libros />} />
        <Route path="/genero" element={<Genero />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;