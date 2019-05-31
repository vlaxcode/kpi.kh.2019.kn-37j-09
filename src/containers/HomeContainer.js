import React from "react";
import { NewProducts } from "../components/NewProducts";
import { EmailUserForm } from "../components/EmailUserForm";
import { SliderCarousel } from "../components/SliderCarousel";
import PageContainer from "../components/PageContainer";
import { ProductList } from "../components/ProductList";
import ContainerWrapper from "./ContainerWrapper";
class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          product_id: "1",
          image: "https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
          }
        },
        {
          product_id: "1",
          image: "https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
          }
        },
        {
          product_id: "1",
          image: "https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
          }
        },
        {
          product_id: "1",
          image: "https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",
          redirect_link: "/path/to/redirect",
          description: {
            header: "Product header",
            subheader: "Description subheader",
          }
        },
      ]
    };
  }

  render() {
    return (
      <ContainerWrapper>
        <PageContainer>
          <NewProducts />
        </PageContainer>
        <PageContainer>
          <EmailUserForm />
        </PageContainer>
        <PageContainer>
          <SliderCarousel />
        </PageContainer>
        <PageContainer>
          <ProductList products={this.state.products}/>
        </PageContainer>
      </ContainerWrapper>
    );
  }
}

export default HomeContainer;
