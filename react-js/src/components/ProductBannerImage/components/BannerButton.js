import React from "react";

const buttonStyle = {
    "fontWeight": "300",
    "fontSize": "15px",
    "position": "relative",
    "top": "45%",
    "left": "40%",
    "background": "#fff",
    "color": "black",
    "zIndex": "1",
    "width": "160px",
    "height": "32px",
    "paddingLeft": "25px",
    "paddingRight": "25px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "textAlign": "center"
};

const BunnerButton = ({ buttonUrl, buttonText, className }) => (
  <a className={className} href={buttonUrl} style={buttonStyle}>
    {buttonText}
  </a>
);

export default BunnerButton;
