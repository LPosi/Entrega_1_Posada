import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidad a mi tienda" />
    </>
  );
}

export default App;
