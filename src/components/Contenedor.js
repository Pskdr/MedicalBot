import React, { useState } from "react";
import Login from "./loginComponents/Login";
import Register from "./loginComponents/Register";

const Contenedor = ({ guardarCargando, cargando }) => {
  const [mostrarLogin, guardarMostrar] = useState(true);

  return (
    <div>
      {mostrarLogin ? (
        <Login
          guardarMostrar={guardarMostrar}
          guardarCargando={guardarCargando}
          cargando={cargando}
          mostrarLogin={mostrarLogin}
        />
      ) : (
        <Register
          guardarMostrar={guardarMostrar}
          guardarCargando={guardarCargando}
          cargando={cargando}
          mostrarLogin={mostrarLogin}
        />
      )}
    </div>
  );
};

export default Contenedor;
