import React, { Fragment } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const WrapperContainer = props => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
);

// TODO: add propTypes

export default WrapperContainer;
