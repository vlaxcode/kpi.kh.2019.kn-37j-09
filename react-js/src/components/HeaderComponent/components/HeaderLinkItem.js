import styled from "styled-components";

const HeaderLinkItem = styled.a`
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

export default HeaderLinkItem;
