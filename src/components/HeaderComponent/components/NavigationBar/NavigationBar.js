import React from "react";
import { ListComponent, UlList, NavigationBarItem } from "../../index";

const NavigationBar = props => {
  if (props.isTabletView) {
    return null;
  }

  return (
    <NavigationBarItem>
      <div className="spacer" />
      <div className="nav-menu">
        <UlList>
          <ListComponent url="/man" text="Men" />
          <ListComponent url="/women" text="Women" />
          <ListComponent url="/kids" text="Kids" />
          <ListComponent url="/cart" text="My Cart" />
          <ListComponent url="/login" text="Log in" linkColor="red" />
        </UlList>
      </div>
    </NavigationBarItem>
  );
};

export default NavigationBar;
