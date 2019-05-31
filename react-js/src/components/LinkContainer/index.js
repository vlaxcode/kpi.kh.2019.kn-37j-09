import PropTypes from 'prop-types';
import styled from "styled-components";

const LinkContainer = styled.a`
  outline: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    z-index: 5;
    opacity: 0.2;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
  }
`;
export default LinkContainer;
