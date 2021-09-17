import React, {useContext} from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);

  return (
    <div
      fluid
      className="collapsed chatbox-wrapper"
      style={{
        position: state.domainID !== "CnDemo" ? "fixed" : "absolute",
        bottom: state.domainID === "CnDem0" && 0,
        right: state.domainID === "CnDem0" && 0,
      }}
    >
      <ExpandCollapseToggle />
    </div>
  );
}
