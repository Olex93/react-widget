import React, { useContext } from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);
  // console.log("Preview mode from within collapsed: " + props.previewMode);
  return (
        <div fluid className={`collapsedchatbox-wrapper ${state.previewMode === 'true' ? ' pinnedToDiv' : '' }`}>
          <ExpandCollapseToggle />
        </div>
  );
}
