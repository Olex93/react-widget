import React, { useContext } from "react";
import { Context } from "../../Store";
import "../../scss/chatbox.scss";
import "../../scss/typography.scss";
import ChatboxCollapsed from "./ChatboxCollapsed";
import ChatboxExpanded from "./ChatboxExpanded";

export default function Chatbox(props) {
  const [state, dispatch] = useContext(Context);
  const {previewMode} = props

  return (
    <>{state.chatboxExpanded ? <ChatboxExpanded previewMode={previewMode} /> : <ChatboxCollapsed previewMode={previewMode}/>}</>
  );
}
