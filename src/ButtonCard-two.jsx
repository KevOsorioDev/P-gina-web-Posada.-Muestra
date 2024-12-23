// import React from "react";
// import styled from "styled-components";

const Button = ({texto}) => {
  return (
      <a href="../habitacion-uno.html" className="btn btn-two">
        <span> {texto} </span>
        <i className="fa-solid fa-circle-info"></i>
      </a>
  );
};

export default Button;
