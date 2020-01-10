import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 1% 0 0 1%;
`;

const Img = styled.img`
  width: 15%;
`;

export default function Header() {
  return (
    <Div>
      <Img src={logo}></Img>
    </Div>
  );
}
