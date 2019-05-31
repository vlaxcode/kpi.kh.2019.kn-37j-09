import React from "react";
import { SBurger, SBurgerSpan } from "./style";

const BurgerButton = ({ onClick, isActive }) => (
  <SBurger onClick={onClick}>
    <SBurgerSpan className={isActive ? "active" : ""} color="black" />
  </SBurger>
);

export default BurgerButton;
