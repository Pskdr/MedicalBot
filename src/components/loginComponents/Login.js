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

  const actualizarState = (e) => {
    guardarUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Login</h2>

        <div className="campo">
          <label>User</label> 
          <br/>
          <input
            type="text"
            className="input"
            name="userName"
            value={userName}
            placeholder="juan@hotmail.com"
            onChange={actualizarState}
          />
        </div>

        <div className="campo">
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={actualizarState}
            className="u-full-width input"
          />
        </div>
        <br></br>
        <input type="submit" className="button" value="Login" />
      </form>

      <p>Did you forget your password?</p>
      <input
        onClick={(e) => onClick(e)}
        value="Sign in"
        className="registrarse"
      />
    </div>
  );
};

export default Login;
