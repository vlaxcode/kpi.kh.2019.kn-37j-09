import React from "react";
import styled from "styled-components";
import { NavigationBar, NavigationMobileMenu } from ".";
import BurgerButtonComponent from "../BurgerButtonComponent";
import { LogoComponent } from "./index";

const HeaderComponent = styled.header`
  &.is-not-mobile {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.headerColor};
    z-index: 10;
    height: ${props => props.headerHeight};

    -webkit-transition: background 0.53s, height 0.1s;
    transition: background 0.53s, height 0.1s;
    border-bottom: rgb(223, 221, 221) solid 1px;
  }

  &.is-mobile {
    top: 0;
    left: 0;
    height: ${props => props.headerHeight};
    width: 100%;
    background-color: black;
    z-index: 10;
    height: 100%;

    -webkit-transition: background 0.44s 0.1s cubic-bezier(0.52, 0.16, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    transition: background 0.44s 0.1s cubic-bezier(0.52, 0.16, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  }
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 980px;
  align-items: center;
  height: 58px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    padding: 0 25px;
  }
`;

const NavigationMenu = styled.nav`

`


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      mobileMenuIsActive: false
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  menuToggle = () => {
    this.setState(prevState => {
      return { mobileMenuIsActive: !prevState.mobileMenuIsActive };
    });
    // this.setState({ mobileMenuIsActive: !this.state.mobileMenuIsActive });
    document.body.classList.toggle("noscroll");
  };

  menuCloser = () => {
    this.setState({ mobileMenuIsActive: false });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    return (
      <HeaderComponent
        className={this.state.mobileMenuIsActive ? "is-mobile" : "is-not-mobile"}
        headerColor="#fff"
        headerHeight="58px"
      >
        <HeaderContainer>
          <MenuItem>
            <LogoComponent
              linkColor="rgb(27, 27, 27)"
              hoverColor="rgb(27, 27, 27)"
              link="/"
            />
            <div className="spacer" style={{ flex: "1" }} />
            <NavigationBar isTabletView={isMobile} />
            {isMobile && (
              <BurgerButtonComponent onClick={this.menuToggle} color="black" />
            )}
          </MenuItem>
        </HeaderContainer>
        {this.state.mobileMenuIsActive && (
          <NavigationMobileMenu onClick={this.menuCloser} />
        )}
      </HeaderComponent>
    );
  }
}
