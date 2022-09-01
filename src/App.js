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

  // useLayoutEffect(() => {
  //   guardarCargando(false);

  //   return () => {
  //     guardarCargando(false);
  //   };
  // }, []);
  return (
    <div className="App">
      <Header />
      {cargando ? (
        <Body />
      ) : (
        <div className="App-login">
          <Contenedor guardarCargando={guardarCargando} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
