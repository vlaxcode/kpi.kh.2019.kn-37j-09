import React from "react";
import "./ProductBannerImage.scss";
import { BunnerButton } from "../ProductBannerImage";
import LinkContainer from "../LinkContainer";

const ProductBannerImage = ({ imageUrl, className }) => (
  <div className={"image-wrap " + className}>
    <LinkContainer>
      <img
        className="image-content"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="New Product"
      />
    </LinkContainer>
    <div className="image-description-wrap">
      <h3 className="image-title">Sport time</h3>
      <h4 className="image-subtitle">Special offer for all sports wear</h4>
    </div>
    <BunnerButton
      className="btn-visibility"
      buttonText="Button text"
      buttonUrl="/url"
    />
  </div>
);

export default ProductBannerImage;
