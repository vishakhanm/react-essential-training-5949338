import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header({name, year}) {
  return (
    <header>
    <h1>{name}'s Kitchen</h1>
    <p>Copyright {year}</p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header name="Alex" year={2025}/>
      <main>
        <h2> We serve very delicious food </h2>
      </main>
    </div>
  )
}

export default App;
