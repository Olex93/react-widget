import React, { useContext } from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);
  // console.log("Preview mode from within collapsed: " + props.previewMode);
  return (
    <>
      {state.previewMode === true && (
        <div fluid className="collapsed chatbox-wrapper pinnedToDiv">
          <ExpandCollapseToggle />
        </div>
      )}
      {state.previewMode === false && (
        <div fluid className="collapsed chatbox-wrapper">
          <ExpandCollapseToggle />
        </div>
      )}
    </>
  );
}
