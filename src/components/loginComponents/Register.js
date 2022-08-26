import React from "react";
import "./index.css";
import Img from "./imagen.jpg";

const Register = ({ guardarMostrar }) => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ejemplo transporte"
        />
      </div>

      <div className="campo">
        <label>Canrtidad Gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Register;
