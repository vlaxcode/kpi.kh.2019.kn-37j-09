import styled from "styled-components";

const ProductItem = styled.div`
  background-color: grey;
  background-image: url(${props => props.image});
  z-index: 0;
  padding-top: 120%;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
`;

export default ProductItem;
