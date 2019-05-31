import styled from "styled-components";

// Header Styled Components
export const SHeader = styled.header`
  border-bottom: rgb(223, 221, 221) solid 1px;

  // &.is-not-mobile and mobile
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.headerColor};
  z-index: 10;
  height: ${props => props.headerHeight};

  -webkit-transition: background 0.53s, height 0.1s;
  transition: background 0.53s, height 0.1s;
`;

// Navigation Menu
export const SNav = styled.nav``;

export const SNavLogo = styled.div``;

export const SSpacer = styled.div`
  flex: 1;
`;

export const SNavLinks = styled.div``;

export const SHeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const SHeaderContainer = styled.div`
  // position: relative;
  display: flex;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 980px;
  align-items: center;
  height: 58px;

  @media (max-width: 769px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const SNavLogoContainer = styled.div`
  display: flex;
`;

// Navigation Menu
export const SHeaderLinkItem = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.linkColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.hoverColor};
  }

  &:active {
    color: ${props => props.activeColor};
  }
`;
