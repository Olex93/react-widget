import React, {useContext} from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);

  return (
    <div
      fluid
      className="collapsed chatbox-wrapper"
    >
      <ExpandCollapseToggle />
    </div>
  );
}
