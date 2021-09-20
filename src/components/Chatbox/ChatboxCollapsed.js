import React, { useContext } from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed(props) {
  const [state] = useContext(Context);
  // console.log("Preview mode from within collapsed: " + props.previewMode);
  return (
    <>
      {props.previewMode === true && (
        <div fluid className="collapsed chatbox-wrapper pinnedToDiv">
          <ExpandCollapseToggle />
        </div>
      )}
      {props.previewMode === false && (
        <div fluid className="collapsed chatbox-wrapper">
          <ExpandCollapseToggle />
        </div>
      )}
    </>
  );
}
