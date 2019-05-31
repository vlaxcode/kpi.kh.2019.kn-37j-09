import React from "react";
import styled from "styled-components";

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const BurgerSpan = styled.span`
  width: 24px;
  height: 1px;
  background: ${props => props.color};
  border-radius: 2px;
`;

const BurgerButtonComponent = ({ color, onClick}) => (
  <BurgerButton onClick={onClick}>
    <BurgerSlice color={color} />
    <BurgerSlice color={color} />
    <BurgerSlice color={color} />
  </BurgerButton>
);

export default BurgerButtonComponent;
