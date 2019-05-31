import React from "react";
import styled from "styled-components";

import { HeaderLinkItem, UlList } from "../../index";

const ListItem = styled.li`
  padding: 0 25px;
`;

const ListComponent = ({ text, url, linkColor, hoverColor, activeColor }) => (
  <ListItem>
    <HeaderLinkItem
      to={url}
      linkColor={linkColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
    >
      {text}
    </HeaderLinkItem>
  </ListItem>
);

export default ListComponent;