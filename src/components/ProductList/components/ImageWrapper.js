import styled from "styled-components";
import { WidthListItemWrapper } from "../index";

const ImageWrapper = styled.div`
  position: relative;
  background-size: 100%;

  // pseudo
  ${WidthListItemWrapper} &:after {
    content: "";
    transition: opacity 0.2s ease;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
  }
`;

export default ImageWrapper;
