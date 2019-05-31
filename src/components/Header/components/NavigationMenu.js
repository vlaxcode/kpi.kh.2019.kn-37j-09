import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  SDropdownContainer,
  SDropdownWrapper,
  SNavigationList,
  SNavigationListItem,
  SDropdownListItem,
  SDropdownMSpan,
  SDropdownHeader,
  SDropdownList,
  SDropdonMainList,
  SDropdownMainListItem,
  SNavContainer
} from "./style";

const DropdownSection = ({ dropdownSectionlinks, title }) => {
  const items = dropdownSectionlinks.map((item, index) => (
    <SDropdownListItem key={index}>
      <NavLink to={item.url}>{item.name}</NavLink>
    </SDropdownListItem>
  ));

  return (
    <SDropdownMainListItem>
      <SDropdownHeader>{title}</SDropdownHeader>
      <SDropdownList>{items}</SDropdownList>
    </SDropdownMainListItem>
  );
};

const DropdownSpan = ({ isMobile, hasItems, onClick }) => {
  if (!hasItems || !isMobile) {
    return null;
  }

  return <SDropdownMSpan onClick={onClick} />;
};

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  onMouseEnterHandler = () => {
    if (!this.props.isMobile) {
      console.log("on mouse enter");
      this.setState({
        isActive: true
      });
    }
  };

  onMouseLeaveHandler = () => {
    if (!this.props.isMobile) {
      console.log("on mouse leve");

      this.setState({
        isActive: false
      });
    }
  };

  isActiveToggle = () => {
    console.log("is active enter");

    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { dropdown, category, className, onClick, isMobile } = this.props;
    console.log("ismobile?", isMobile);
    const dropdowns = dropdown.map((item, index) => (
      <DropdownSection
        key={index}
        title={item.name}
        dropdownSectionlinks={item.categories}
      />
    ));

    const hasItems = dropdowns.length > 0;

    return (
      <SNavigationListItem
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onMouseUp={this.onMouseLeaveHandler}
        className={
          "nav-link" +
          (this.state.isActive ? " is-active" : "") +
          (hasItems ? " has-items" : "")
        }
      >
        <NavLink to={category.url}>{category.name}</NavLink>
        <Fragment>
          <DropdownSpan
            onClick={this.isActiveToggle}
            isMobile={isMobile}
            hasItems={hasItems}
          />
          {/* dropdown start here */}
          <SDropdownContainer
            className={isMobile ? "is-mobile" : " not-mobile"}
          >
            <SDropdownWrapper>
              <SDropdonMainList>{dropdowns}</SDropdonMainList>
            </SDropdownWrapper>
          </SDropdownContainer>
        </Fragment>
      </SNavigationListItem>
    );
  }
}

class NavigationMenu extends React.PureComponent {
  render() {
    const { categories, onClick, className, isMobile } = this.props;
    console.log("cat", categories);
    const items = categories.map((category, index) => (
      <NavigationItem
        key={index}
        category={category}
        dropdown={category.dropdown}
        onClick={onClick}
        isMobile={isMobile}
        className={className}
      />
    ));

    return (
      <SNavContainer className={className}>
        <SNavigationList>{items}</SNavigationList>
      </SNavContainer>
    );
  }
}

export default NavigationMenu;
