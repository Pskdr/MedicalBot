import React from "react";
import "./styles.css";

const Error = ({ texto }) => {
  return (
    <div className="error">
      <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
    </div>
  );
};

export default Error;
