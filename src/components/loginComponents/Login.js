import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import swal from 'sweetalert';


const Login = ({ guardarMostrar, guardarCargando, cargando, mostrarLogin }) => {
  const [user, guardarUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    User();
  };

  const { email, password } = user;
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

  // Verificar login 

  async function User() {

    let usuario = { email: user.email, password: user.password };

    console.log(user)

    let res = await axios.post('http://localhost:4000/login', usuario).catch(function (error) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx
        console.log(error.response.status);
        if (error.response.status === 404) {
          swal({
            title: 'Error',
            text: 'Usuario y/o contraseña incorrecta',
            icon: 'error', // error, success, info
            button: 'Aceptar',
            timer: '3000'
          })
        }
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js
        console.log(error.request);
      } else {
        // Algo paso al preparar la petición que lanzo un Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });


    let data = res.data;
    if (data.msg === 'success') {
      swal({
        title: `Bienvenido ${data.nombre}`,
        text: 'Ingreso exitoso',
        icon: 'success', // error, success, info
        button: 'Aceptar',
        timer: '3000'
      })
      guardarCargando(!cargando);
    }
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Login</h2>

        <div className="campo">
          <label>User</label>
          <br />
          <input
            type="text"
            className="input"
            name="email"
            value={email}
            placeholder="Email"
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
