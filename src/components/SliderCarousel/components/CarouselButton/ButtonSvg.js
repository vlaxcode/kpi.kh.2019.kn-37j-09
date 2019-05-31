import React from "react";

const style = {
  display: "inline-block",
  width: "20px",
  height: "20px",
  position: "absolute",
  top: "52%",
  left: "52%",
  transform: "translate(-50%, -50%)"
}

const ButtonSvg = props => (
  <span className={props.className} style={style}>
    <svg
      viewBox="0 0 18 18"
      role="img"
      aria-label="Далее"
      focusable="false"
      width={props.width}
      height={props.height}
      transform={props.transform}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fill-rule="evenodd"
      />
    </svg>
  </span>
);

export default ButtonSvg;
