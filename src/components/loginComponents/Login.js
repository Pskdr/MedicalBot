import React, { useState } from "react";
import "./styles.css";

const Login = ({ guardarMostrar }) => {
  const [user, guardarUser] = useState({
    userName: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { userName, password } = user;

  return (
    <div className="contiene">
      <form>
        <div className="Contenedor" onSubmit={onSubmit}>
          <h1>Inicio de Sesión</h1>
          <i className="fa-solid fa-envelope icon"></i>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={userName}
          />
        </div>
        <div className="contenedor">
          <i className="fa-solid fa-life-ring icon" />
          <input type="password" placeholder="contraseña" value={password} />
        </div>
        <input type="submit" className="button" />
      </form>
    </div>
  );
};

export default Login;
