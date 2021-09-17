import React, {useContext} from "react";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import { Context } from "../../Store";

export default function ChatboxCollapsed() {
  const [state] = useContext(Context);
  console.log(state.previewMode)
  return (
    <div
      fluid
      className={"collapsed chatbox-wrapper" +  state.previewMode === true ? "pinnedToDiv" : "" }
    >
      <ExpandCollapseToggle />
    </div>
  );
}
