import React, { useContext } from "react";
import { Context } from "../Store";
import ClickNeutralLogoLightSmall from "./svgs/CliclNeutralLogoLightSmall";
import "../scss/buttons.scss";

export default function ExpandCollapseToggle(props) {
  const [state, dispatch] = useContext(Context);
  
  const ToggleChatbox = () => {
    if (state.chatboxExpanded === true) {
      // dispatch({
      //   type: "TOGGLE_CHATBOX",
      //   payload: false,
      // });
      dispatch({ chatboxExpanded: false });
    } else {
      // dispatch({
      //   type: "TOGGLE_CHATBOX",
      //   payload: true,
      // });
      dispatch({ chatboxExpanded: true });
    }
  };

  const collapsedBackgroundColor = {
    backgroundColor: state.collapsedBackgroundColor,
  }

  return (
    <div
      className="toggleButtonWrapper"
      style={{
        borderColor: state.lowerFrameColor,
        backgroundColor: state.lowerFrameColor,
        borderRadius: state.chatboxExpanded ? 0 : "15px 15px 0 0",
      }}
    >
      <button
        className="chatBoxButton"
        style={[collapsedBackgroundColor, state.bodyFont]}
        onClick={ToggleChatbox}
      >
        <span style={{color: state.collapsedForegroundColor}}>Offsetting your visit</span>
        {/* <img
          src={ClickNeutralLogo}
          alt="ClickNeutral logo"
          className="buttonLogo"
        /> */}
        <span className="collapsedLogo"><ClickNeutralLogoLightSmall /></span>
      </button>
    </div>
  );
}
