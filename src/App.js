import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/footerComponent/Footer";
import Header from "./components/headerComponent/Header";
import Spinner from "./components/spinnerComponents/Spinner";
import Button from "./components/Button/Button";

function App() {
  const [cargando, guardarCargando] = useState(false);

  return (
    <div className="App">
      <Header />
      {!cargando ? (
        <Body />
      ) : (
        <div>
          <Spinner />
          <Button guardarCargando={guardarCargando} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
