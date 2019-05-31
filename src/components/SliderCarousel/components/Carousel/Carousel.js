import React from "react";
import "./Carousel.scss";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  CarouselButton,
  ButtonSvg
} from "../../index";

import SectionHeader from "../../../SectionHeader"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      direction: "next",
      sliding: false
    };
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.doSliding("next", position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    this.doSliding("prev", position === 0 ? numItems - 1 : position - 1);
  };

  doSliding = (direction, position) => {
    console.log("Sliding status before: ", this.state.sliding);

    this.setState({
      sliding: true,
      direction,
      position
    });
    console.log("Sliding status after: ", this.state.sliding);

    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  };
  style = "";
  render() {
    const { sliding, direction } = this.state;
    const { title, subTitle, children } = this.props;

    return (
      <div>
        <SectionHeader header={title} subHeader={subTitle}/>
        <Wrapper>
          <CarouselContainer sliding={sliding} direction={direction}>
            {children.map((child, index) => (
              <CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>

        <CarouselButton className="prev-slider-btn" onClick={this.nextSlide}>
          <ButtonSvg height="20px" width="20px" transform="rotate(180)"/>
        </CarouselButton>
        <CarouselButton className="next-slider-btn" onClick={this.prevSlide}>
          <ButtonSvg height="20px" width="20px" />
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;
