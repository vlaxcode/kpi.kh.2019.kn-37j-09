import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin-top: 15px;
`;

const MainHeader = styled.h4`
  margin: 0;
  margin-bottom: 2px;
  padding: 0;
  color: red;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #3e3e3e;
`;

const SubheaderHeader = styled.h5`
  margin: 0;
  margin-bottom: 2px;
  padding: 0;
  color: red;

  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;

  color: #8e8e8e;
`;

const DescriptionWrapper = ({headerText, subHeaderText, priceText}) => (
  <HeaderWrapper>
    <MainHeader>{headerText}</MainHeader>
    <SubheaderHeader>{subHeaderText}</SubheaderHeader>
    { priceText && <SubheaderHeader>{priceText}</SubheaderHeader>} 
  </HeaderWrapper>
);

export default DescriptionWrapper;
