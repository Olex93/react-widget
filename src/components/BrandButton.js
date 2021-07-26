import React from "react";
import "../scss/buttons.scss";

export default function BrandButton(props) {
  return (
    <button
      onClick={() => props.action(props.actionParams && props.actionParams)}
      className="brand-button"
    >
      {props.title}
    </button>
  );
}
