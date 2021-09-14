import React, { useContext } from "react";
import { Context } from "../Store";
import ClickNeutralLogo from "../images/ClickNeutralLogo-TEMP.png";
import "../scss/buttons.scss";

export default function ExpandCollapseToggle(props) {
  const [state, dispatch] = useContext(Context);

  const ToggleChatbox = () => {
    if (state.chatboxExpanded === true) {
      dispatch({
        type: "TOGGLE_CHATBOX",
        payload: false,
      });
    } else {
      dispatch({
        type: "TOGGLE_CHATBOX",
        payload: true,
      });
    }
  };


  return (
    <div
      className="toggleButtonWrapper"
      style={{
        borderColor: state.chatBoxCollapsedBorderColor,
        backgroundColor: state.chatBoxCollapsedBorderColor,
      }}
    >
      <button
        className="chatBoxButton"
        style={{
          backgroundColor: state.chatBoxCollapsedBg,
          fontFamily: state.bodyFont,
        }}
        onClick={ToggleChatbox}
      >
        Offsetting your visit
        <img
          src={ClickNeutralLogo}
          alt="ClickNeutral logo"
          className="buttonLogo"
        />
      </button>
    </div>
  );
}
