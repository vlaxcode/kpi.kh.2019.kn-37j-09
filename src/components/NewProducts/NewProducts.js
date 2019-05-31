import React from "react";
import "./NewProducts.scss";

import { Redirect } from "react-router-dom";
import { ProductBannerImage } from "../ProductBannerImage";

class NewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  clickHandler = () => {
    this.setState({ redirect: !this.redirect });
    console.log("Btn clicked");
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/prop"} />;
    }
    return (
      <div className="gallery">
        <div className="column left">
          <ProductBannerImage className="wrap-left"/>
          <ProductBannerImage className="wrap-left buto"/>
        </div>

        <div className="column right">
          <ProductBannerImage className="wrap-big" />
        </div>
      </div>
    );
  }
}

export default NewProducts;
