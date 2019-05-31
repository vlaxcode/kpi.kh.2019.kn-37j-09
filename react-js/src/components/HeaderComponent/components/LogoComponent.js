import styled from "styled-components";
import React from "react";
import HeaderLinkItem from "./HeaderLinkItem";

const LogoWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const LinkLogo = styled(HeaderLinkItem)`
  color: darkred;
`;

const LogoComponent = ({ linkColor, hoverColor, activeColor, link }) => (
  <LogoWrapper>
    <LinkLogo
      linkColor={linkColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
      href={link}
    >
      THE LOGO
    </LinkLogo>
  </LogoWrapper>
);

export default LogoComponent;
