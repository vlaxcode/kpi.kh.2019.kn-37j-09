import React from "react";

import SectionHeader from "../SectionHeader";
import LinkContainer from "../LinkContainer";
import DescriptionWrapper from "../DescriptionWrapper";
import {
  ImageWrapper,
  ProductItem,
  WidthListItemWrapper,
  WidthListMain
} from "./index";

const ProductsList = ({ products }) => {
  if (products && products.length > 0) {
    return (
      <div>
        <SectionHeader
          header="Get more information"
          subHeader="Products that makes you better"
        />
        <WidthListMain>
          {products.map((product, index) => (
            <WidthListItemWrapper key={index}>
              <LinkContainer>
                <ImageWrapper>
                  <ProductItem image={product.image} />
                </ImageWrapper>
                <DescriptionWrapper
                  headerText={product.description.header}
                  subHeaderText={product.description.subheader}
                />
              </LinkContainer>
            </WidthListItemWrapper>
          ))}
        </WidthListMain>
      </div>
    );
  }
  return null;
};

export default ProductsList;
