import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeContainer, ProductContainer } from "./index";

const RouterContainer = props => (
  <main>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/product" component={ProductContainer} />
    </Switch>
  </main>
);

export default RouterContainer;
