import React, { useState } from "react";
import "./styles.css";
import Error from "./Error";

const Register = ({ guardarMostrar, guardarCargando, cargando }) => {
  const [userRegistro, guardarUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, password, confirmPassword } = userRegistro;

  const [error, guardarError] = useState(false);

  let texto = "";
  const onSubmit = (e) => {
    e.preventDefault();

    if (!(password.trim() === "" && confirmPassword.trim() === "")) {
      if ((password.trim() === confirmPassword.trim()) === "") {
        guardarError(false);
        guardarCargando(!cargando);
      } else {
        //ERROR
        texto = "Las contraseñas no son iguales";
        guardarError(true);
      }
    } else {
      //ERROR

      texto = "Todos los campos son obligatorios";
      guardarError(true);
    }
  };

  const actualizarState = (e) => {
    guardarUser({
      ...userRegistro,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Register</h2>
        {error ? <Error texto={texto} /> : null}
        <div className="campo">
          <label>Usuario</label>
          <input
            type="text"
            name="userName"
            className="input"
            onChange={actualizarState}
            value={userName}
            placeholder="juan@hotmail.com"
          />
        </div>

        <div className="campo">
          <label>Contraseña</label>
          <input
            className="input"
            type="password"
            name="password"
            onChange={actualizarState}
            value={password}
          />
        </div>
        <div className="campo">
          <label>repetir Contraseña</label>
          <input
            className="input"
            type="password"
            name="confirmPassword"
            onChange={actualizarState}
            value={confirmPassword}
          />
        </div>

        <input type="submit" className="button" value="Registrarse" />
      </form>
    </div>
  );
};

export default Register;
