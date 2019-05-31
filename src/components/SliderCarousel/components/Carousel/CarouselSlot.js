import styled from "styled-components";

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 19%;
  margin-right: 5px;
  order: ${props => props.order};
  opacity: ${props => {
    return props.order === 1 ? 0.95 : 1;
  }};
  transition: opacity 1s ease;
`;

export default CarouselSlot;
