import React from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";

export default function ChatboxCollapsed(props) {

  return (
    <div
      fluid
      className="collapsed chatbox-wrapper"
    >
      <ExpandCollapseToggle />
    </div>
  );
}
