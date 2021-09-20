import React, { useContext } from "react";
import { Context } from "../../Store";

export default function InfoIcon() {
  const [state] = useContext(Context);

  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 17 17"
        style={{
          enableBackground: "new 0 0 17 17",
          display: "inline",
          height: "17px",
          width: "17px",
          position: "absolute",
          lefT: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <g>
          <rect id="rectFill" fill={state.iconColor} width="17" height="17" />
        </g>
        <g>
          <path
            id="pathFill"
            fill="#ffffff"
            d="M7.677,5.729V4.205h1.646v1.523H7.677z M7.677,12.795V6.572h1.646v6.223H7.677z"
          />
        </g>
      </svg>
    </>
  );
}
