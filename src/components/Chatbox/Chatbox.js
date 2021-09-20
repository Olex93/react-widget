import React, { useContext } from "react";
import { Context } from "../../Store";
import "../../scss/chatbox.scss";
import "../../scss/typography.scss";
import ChatboxCollapsed from "./ChatboxCollapsed";
import ChatboxExpanded from "./ChatboxExpanded";

export default function Chatbox() {
  const [state, dispatch] = useContext(Context);

  return (
    <>{state.chatboxExpanded ? <ChatboxExpanded /> : <ChatboxCollapsed />}</>
  );
}
