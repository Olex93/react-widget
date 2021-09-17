import React, {useContext} from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);
  console.log('Preview mode from within collapsed: ' + state.previewMode)
  return (
    <div
      fluid
      className={`expanded chatbox-wrapper ${state.domainID === true && 'pinnedToDiv'}`}
    >
      <ExpandCollapseToggle />
    </div>
  );
}
