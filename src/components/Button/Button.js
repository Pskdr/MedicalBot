import React from "react";

import styled from "@emotion/styled";
import { Form } from "./ButtonStyles";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  margin-top: auto;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Button = ({ guardarCargando, cargando }) => {
  const onSubmit = (e) => {
    console.log(cargando);
    e.preventDefault();
    guardarCargando(!cargando);
  };
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Boton type="submit" value="Empecemos" />
    </Form>
  );
};

export default Button;
