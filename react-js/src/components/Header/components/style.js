import styled, { css } from "styled-components";
import { SHeaderLinkItem } from "../style";

// Header Styled Components
export const SLogoWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

export const SLinkLogo = styled(SHeaderLinkItem)`
  color: darkred;
`;

// Burger Button Styles
export const SBurger = styled.button`
  position: absolute;
  right: 0;

  margin-right: 20px;
  height: 24px;
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const SBurgerSpan = styled.span`
  &,
  &:before,
  &:after {
    width: 24px;
    height: 1px;
    border-radius: 2px;
    display: block;
    position: absolute;
    background: ${props => props.color};
    z-index: 25;

    transition: all 200ms ease-in-out;
  }

  &:before {
    content: "";
    top: -8px;
  }

  &:after {
    content: "";
    bottom: -8px;
  }

  // animation
  &.active {
    background-color: transparent;

    &:before,
    &:after {
      top: 0;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

// navigation menu styles
export const SNavContainer = styled.div`
  display: flex;
  // flex-direction: row;
  @media (max-width: 769px) {
    // background: blue !important;
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    // flex-direction: column;
    height: 100%;
    width: 100%;
    background: #fff;
    margin-top: 1px;
    z-index: 20;

    &.is-mobile {
      display: flex;
    }
  }
`;

export const SNavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;

  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    padding: 90px 0;
  }
`;

export const SNavigationListItem = styled.li`
  flex-wrap: wrap;
  outline: none;

  // background: blue;
  &.nav-link {
    line-height: 58px;
  }

  a {
    font-size: 15px;
    font-weight: 400;
    padding: 0 30px;
    color: black;

    &:hover {
      color: #505050;
    }

    &:hover, &:focus, &:active {
      outline: none;
    }
    
  }

  @media (max-width: 769px) {
    border-bottom: 1px solid #e2e2e2;
    display: flex;

    a {
      padding: 0;
      margin: 12px 0 13px 30px;
      font-size: 15px;

      -ms-flex: 1 0 50%;
      flex: 1 0 50%;
      line-height: 28px;
    }  
  }
`;

// subcategories of header item
export const SDropdownContainer = styled.div`
  display: none;

  padding: 0 30px;
  &.not-mobile {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.175);
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
    z-index: 20;
    background-color: white;
  }

  ${SNavigationListItem}.is-active.has-items & {
    display: block;
    border-top: rgb(223, 221, 221) solid 1px;

    opacity: 1;
    transition: opacity 0.1s, visibility 0.1s;
    transition-delay: 0.3s;
  }

  &.is-mobile {
    width: 100%;
    background-color: #fbfbff;
  }
`;

export const SDropdownWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  // padding: 10px;
  max-width: 980px;
  padding: 10px 0;
`;

export const SDropdonMainList = styled.ul`
  display: flex;

  ${SDropdownContainer}.is-mobile & {
    flex-direction: column;
  }

  ${SDropdownContainer}.not-mobile & {
    flex-direction: row;
  }
`;

export const SDropdownMainListItem = styled.li`
  ${SDropdownContainer}.is-mobile & {
    margin: 0;
  }

  ${SDropdownContainer}.not-mobile & {
    margin: 25px 40px 24px 0;
  }
`;

export const SDropdownHeader = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: 40px;
  font-weight: 600;
  color: ${props =>
    props.color &&
    css`
      color: green;
    `};
`;
export const SDropdownList = styled.ul``;

export const SDropdownListItem = styled.li`
  margin: 0;
  padding: 0;
  display: list-item;
  padding-bottom: 8px;
  line-height: 18px;

  &:first-child {
    padding-top: 2px;
  }

  a {
    padding: 0;
    margin: 0;
    color: #0560b3;
    // color: #313131;
    font-size: 13px;
    font-weight: 400px;
  }

  // @media (max-width: 769px) {
  //   background: red;
  // }
`;

export const SDropdownMSpan = styled.span`
  flex: 0 0 40px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  color: #006aff;
  // background: blue;
  // border-left: black solid 1px;

  &:before {
    content: "";
    // background: blue;
    display: inline-block;
    background-image: url('/src/static/images/arrow.svg');
    background-size: 28px 28px;
  }
`;
