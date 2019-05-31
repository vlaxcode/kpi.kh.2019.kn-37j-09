import React from "react";
// import "./Button.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MenuBtn = styled.div`
  height: 20px;
  width: 100px;
  margin: 20px;
  padding: 10px;
  background: black;
  border-radius: 2px;
  text-align: center;
  user-select: none;
  position: relative;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
    box-shadow: none;
  }

  span {
    color: white;
  }
`

const Button = ({ onClick, className }) => {
  return (
    <MenuBtn onClick={onClick}>
      <span>Button text</span>
    </MenuBtn>
  );
};

export default Button;

