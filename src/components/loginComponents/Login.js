import React, { useState } from "react";
import "./styles.css";

const Login = ({ guardarMostrar, guardarCargando, cargando, mostrarLogin }) => {
  const [user, guardarUser] = useState({
    userName: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    guardarCargando(!cargando);
  };

  const { userName, password } = user;
  const onClick = (e) => {
    e.preventDefault();
    guardarMostrar(!mostrarLogin);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Login</h2>

        <div className="campo">
          <label>Usuario</label>
          <input
            type="text"
            className="input"
            value={userName}
            placeholder="juan@hotmail.com"
          />
        </div>

        <div className="campo">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            className="u-full-width input"
          />
        </div>

        <input type="submit" className="button" value="Ingresar" />
      </form>

      <p>¿No recuerdas tu contraseña?</p>
      <input
        onClick={(e) => onClick(e)}
        value="Registrarse"
        className="registrarse"
      />
    </div>
  );
};

export default Login;
