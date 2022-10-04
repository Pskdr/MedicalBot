import React from "react";
import "./styles.css";

const Error = ({ texto }) => {
  return (
    <div className="error">
      <p>All fields are required</p>
    </div>
  );
};

export default Error;
