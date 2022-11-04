import React, { useState } from "react";
import "./styles.css";
import Error from "./Error";

const Register = ({
  guardarMostrar,
  guardarCargando,
  cargando,
  mostrarLogin,
}) => {
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
      if (password.trim() === confirmPassword.trim()) {
        guardarError(false);
        guardarCargando(!cargando);
      } else {
        //ERROR
        texto = "Passwords are not the same";
        guardarError(true);
      }
    } else {
      //ERROR

      texto = "All fields are required";
      guardarError(true);
    }
  };

  const actualizarState = (e) => {
    guardarUser({
      ...userRegistro,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();

    guardarMostrar(!mostrarLogin);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Register</h2>
        {error ? <Error texto={texto} /> : null}
        <div className="campo">
          <label>User</label>
          <br></br>
          <input
            type="text"
            name="userName"
            className="input"
            onChange={actualizarState}
            value={userName}
            placeholder=""
          />
        </div>

        <div className="campo">
          <label>Password</label>
          <input
            className="input"
            type="password"
            name="password"
            onChange={actualizarState}
            value={password}
          />
        </div>
        <div className="campo">
          <label>Repeat password</label>
          <input
            className="input"
            type="password"
            name="confirmPassword"
            onChange={actualizarState}
            value={confirmPassword}
          />
        </div>
        <br></br>
        <input type="submit" className="button" value="Sign in" />
      </form>

      <p>Do you have an account?</p>
      <input
        onClick={(e) => onClick(e)}
        value="Login"
        className="registrarse"
      />
    </div>
  );
};

export default Register;
