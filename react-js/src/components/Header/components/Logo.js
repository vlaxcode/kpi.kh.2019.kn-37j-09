import React from "react";
import {SLogoWrapper, SLinkLogo} from "./style"

const Logo = ({ linkColor, hoverColor, activeColor, link }) => (
  <SLogoWrapper>
    <SLinkLogo
      linkColor={linkColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
      href={link}
    >
      THE LOGO
    </SLinkLogo>
  </SLogoWrapper>
);

export default Logo;