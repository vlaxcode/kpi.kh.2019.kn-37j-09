import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "../SliderCarousel";
import DescriptionWrapper from "../DescriptionWrapper";

const CarouselItem = styled.div`
  background: darkred;
  text-align: center;
  // padding: 100px 30px;
  width: 230px;
  height: 300px;

  color: white;
  position: relative;
  // background-image: url(${props => props.image});
  background-color: blue;
  background-size: cover;
`;

const carouselItemLinkStyle = {
  textDecoration: "none",
  color: "black"
};

export default class SliderCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: [
        {
          image_id: "1",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "2",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "3",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "4",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "5",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "6",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "7",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "8",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "9",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        },
        {
          image_id: "10",
          image_alt: "image_alt",
          image_href:
            "https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
            product_price: "2308",
            product_currency_name: "грн"
          }
        }
      ]
    };
  }

  componentDidMount() {
    // getData();
  }

  getData() {
    var myRequest = new Request("websiteUrl");
    let sliderData = [];

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ sliderData: data });
      });
  }

  render() {
    const { sliderData } = this.state;
    let carouselItems = null;
    console.log(sliderData);

    if (sliderData && sliderData.length > 0) {
      carouselItems = sliderData.map((item, index) => (
        <a
          key={index}
          className="item-wrapper"
          href={item.redirect_link}
          style={carouselItemLinkStyle}
        >
          <CarouselItem image={item.image_href} />
          <DescriptionWrapper
            headerText={item.description.header}
            subHeaderText={item.description.subheader}
            priceText={
              item.description.product_price +
              " " +
              item.description.product_currency_name
            }
          />
        </a>
      ));
      return (
        <Carousel title="Recomendations" subTitle="Top product in this section">
          {carouselItems}
        </Carousel>
      );
    } else {
      return <div />;
    }
  }
}
