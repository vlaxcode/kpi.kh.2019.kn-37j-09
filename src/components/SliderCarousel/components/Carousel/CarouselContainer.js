import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  // margin: 0 0 20px 20px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1.2s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-20% - 2px))'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-20% - 5px)))'
    return 'translateX(0%)'
  }};
`;
export default CarouselContainer;
