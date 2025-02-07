import React from "react";
import Navbar from "../compos/Navbar";
import { Corusel } from "../compos/Corusel";
import Search from "../compos/Search";
import MenuBrends from "../compos/MenuBrends";
import Populor from "../compos/Populor";

const Enter = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Corusel />
      <MenuBrends />
      <Populor />
    </div>
  );
};

export default Enter;
