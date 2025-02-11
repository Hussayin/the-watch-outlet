import React from "react";
import Navbar from "../compos/Navbar";
import { Corusel } from "../compos/Corusel";
import Search from "../compos/Search";
import MenuBrends from "../compos/MenuBrends";
import Populor from "../compos/Populor";
import MenuAll from "./MenuAll";

const Enter = () => {
  return (
    <div className="mb-[75px]">
      <Navbar />
      <Search />
      <Corusel />
      <MenuBrends />
      <Populor />
      <MenuAll />
    </div>
  );
};

export default Enter;
