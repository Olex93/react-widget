import React, {useContext} from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed(props) {
  const [state] = useContext(Context);
  console.log('Preview mode from within collapsed: ' + props.previewMode)
  return (
    <div
      fluid
      className={`collapsed chatbox-wrapper  ${props.previewMode === true ? 'pinnedToDiv' : ''}`}
    >
      <ExpandCollapseToggle />
    </div>
  );
}
