import React, { useState } from "react";
import Login from "./loginComponents/Login";
import Register from "./loginComponents/Register";

const Contenedor = ({ guardarCargando }) => {
  const [mostrarLogin, guardarMostrar] = useState(false);

  return (
    <div>
      {mostrarLogin ? (
        <Login
          guardarMostrar={guardarMostrar}
          guardarCargando={guardarCargando}
        />
      ) : (
        <Register
          guardarMostrar={guardarMostrar}
          guardarCargando={guardarCargando}
        />
      )}
    </div>
  );
};

export default Contenedor;
