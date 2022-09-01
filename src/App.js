import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/footerComponent/Footer";
import Header from "./components/headerComponent/Header";
import Contenedor from "./components/Contenedor";
import Spinner from "./components/spinnerComponents/Spinner";
import Button from "./components/Button/Button";

function App() {
  const [cargando, guardarCargando] = useState(false);
  const [user, guardarUser] = useState({
    userName: "",
    password: "",
  });

  return (
    <div className="App">
      <Header />
      <div className="App-all">
        {cargando ? (
          <Body />
        ) : (
          <div className="App-login">
            <Contenedor guardarCargando={guardarCargando} cargando={cargando} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
