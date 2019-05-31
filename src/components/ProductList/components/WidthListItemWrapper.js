import styled from "styled-components";
import {ImageWrapper} from "../index";

const WidthListItemWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
  width: 24%;

  &:first-child {
    margin-left: 0
  }

  @media (max-width: 969px) {
    width: 49%;
  }

  @media (min-width: 1440px) {
    width: 24%;
  }

  &:hover ${ImageWrapper}:after {
    opacity: 1;
  }
`;

export default WidthListItemWrapper;
