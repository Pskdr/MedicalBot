import React, { useState } from "react";
import "./styles.css";
import Error from "./Error";
import axios from 'axios';
import swal from 'sweetalert';

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
    email: "",
  });

  const { userName, password, confirmPassword, email } = userRegistro;

  const [error, guardarError] = useState(false);

  let texto = "";
  const onSubmit = (e) => {
    e.preventDefault();

    if (!(password.trim() === "" && confirmPassword.trim() === "")) {
      if (password.trim() === confirmPassword.trim()) {
        guardarError(false);
        User()
      } else {
          swal({
            title: 'Error',
            text: 'Las contraseñas no coinsiden',
            icon: 'error', // error, success, info
            button: 'Aceptar',
            timer: '3000'
          })        
          texto = "Passwords are not the same";
        guardarError(true);
      }
    } else {
      swal({
        title: 'Error',
        text: 'All fields are required',
        icon: 'error', // error, success, info
        button: 'Aceptar',
        timer: '3000'
      })

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
  async function User() {

    let usuario = { nombre: userRegistro.userName, password: userRegistro.password, email: userRegistro.email };


    let res = await axios.post('http://localhost:4000', usuario).catch(function (error) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx
        console.log(error.response.status);
        if (error.response.status === 400) {
          swal({
            title: 'Error',
            text: 'El usuario ya existe',
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
        title: `Bienvenido ${userRegistro.userName}`,
        text: 'Cuenta creada exitosamente',
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
          <label>Email</label>
          <br />
          <input
            type="text"
            className="input"
            name="email"
            value={email}
            placeholder=""
            onChange={actualizarState}
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
