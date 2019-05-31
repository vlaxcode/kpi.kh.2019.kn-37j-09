import React from "react";
import {
  SHeader,
  SHeaderWrapper,
  SHeaderContainer,
  SSpacer,
  SNavLogoContainer
} from "./style";
import Logo from "./components/Logo";
import NavigationMenu from "./components/NavigationMenu";
import BurgerButton from "./components/BurgerButton";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      mobileMenuIsActive: false,
      categories: [
        {
          name: "Men",
          url: "/men",
          dropdown: [
            {
              name: "Men subcategory1",
              url: "/men_subcategory",
              categories: [
                {
                  name: "Subcategory1",
                  url: "/men"
                },
                {
                  name: "Subcategory2",
                  url: "/men"
                },
                {
                  name: "Subcategory3",
                  url: "/men"
                }
              ]
            },

            {
              name: "Men subcategory2",
              url: "/men_subcategory",
              categories: [
                {
                  name: "Subcategory1",
                  url: "/men"
                },
                {
                  name: "Subcategory2",
                  url: "/men"
                },
                {
                  name: "Subcategory3",
                  url: "/men"
                }
              ]
            }
          ]
        },

        {
          name: "Women",
          url: "/women",
          dropdown: [
            {
              name: "Women subcategory1",
              url: "/men_subcategory",
              categories: [
                {
                  name: "Subcategory1",
                  url: "/men"
                },
                {
                  name: "Subcategory2",
                  url: "/men"
                },
                {
                  name: "Subcategory3",
                  url: "/men"
                }
              ]
            },

            {
              name: "Men subcategory2",
              url: "/men_subcategory",
              categories: [
                {
                  name: "Subcategory1",
                  url: "/men"
                },
                {
                  name: "Subcategory2",
                  url: "/men"
                },
                {
                  name: "Subcategory3",
                  url: "/men"
                }
              ]
            }
          ]
        },
        {
          name: "My Cart",
          url: "/mycart",
          dropdown: []
        },
        {
          name: "Sign in",
          url: "/signin",
          dropdown: []
        }
      ]
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
    document.body.classList.toggle("noscroll");
  };

  menuCloser = () => {
    this.setState({ mobileMenuIsActive: false });
  };

  render() {
    const { width, categories } = this.state;
    const isMobile = width <= 768;

    return (
      <SHeader
        className={
          this.state.mobileMenuIsActive ? "is-mobile" : "is-not-mobile"
        }
        headerColor="#fff"
        headerHeight="58px"
      >
        <SHeaderWrapper>
          <SHeaderContainer>
            <SNavLogoContainer>
              <Logo
                linkColor="rgb(27, 27, 27)"
                hoverColor="rgb(27, 27, 27)"
                link="/"
              />
              {isMobile && (
                <BurgerButton
                  onClick={this.menuToggle}
                  isActive={this.state.mobileMenuIsActive}
                />
              )}
            </SNavLogoContainer>

            <SSpacer />
            <NavigationMenu
              categories={categories}
              className={
                this.state.mobileMenuIsActive ? "is-mobile" : "is-not-mobile"
              }
              isMobile={isMobile}
            />
          </SHeaderContainer>
        </SHeaderWrapper>
      </SHeader>
    );
  }
}
