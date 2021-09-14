import React, { useContext } from "react";
import { Context } from "../../Store";
import ExpandCollapseToggle from "../ExpandCollapseToggle";

export default function ChatboxExpanded() {
  const [state] = useContext(Context);

  // const processedString = state.chatBoxExpandedStandFirstText.replace('{today}', <StringSpan text={state.chatBoxExpandedCo2Today} />).replace('{total}', state.chatBoxExpandedCo2Total)
  const stringStart = state.chatBoxExpandedStandFirstText.substring(0, state.chatBoxExpandedStandFirstText.indexOf('{'))
  const stringMiddle = state.chatBoxExpandedStandFirstText.substring(state.chatBoxExpandedStandFirstText.indexOf('}') +1 , state.chatBoxExpandedStandFirstText.lastIndexOf('{'))
  const stringEnd = state.chatBoxExpandedStandFirstText.substring(state.chatBoxExpandedStandFirstText.lastIndexOf('}') +1)
 

  return (
    <div fluid className="expanded chatbox-wrapper">
      <div
        className="headerSection"
        style={{
          backgroundColor: state.chatBoxExpandedFrameTopBg,
          borderColor: state.chatBoxExpandedFrameTopBg,
        }}
      >
        <p
          className="heading"
          style={{
            color: state.chatBoxExpandedTitleColor,
            fontFamily: state.headingFont ? state.headingFont : state.bodyFont,
          }}
        >
          Did you know?
        </p>
      </div>
      <div
        className="standFirstSection"
        style={{
          borderColor: state.chatBoxExpandedFrameTopBg,
          backgroundColor: state.chatBoxExpandedFrameTopBg,
        }}
      >
        <div
          className="standFirstInner"
          style={{ backgroundColor: state.chatBoxExpandedTextBgColor }}
        >
          <p className="standFirstText" style={{color: state.chatBoxExpandedTextColor}}>
            {stringStart} <span style={{color: state.chatBoxExpandedTextHighlightColor}}>{state.chatBoxExpandedCo2Today}</span>{stringMiddle} <span style={{color: state.chatBoxExpandedTextHighlightColor}}>{state.chatBoxExpandedCo2Total}</span>{stringEnd}
          </p>
        </div>
      </div>
      <div
        className="bodyTextSection"
        style={{ borderColor: state.chatBoxExpandedFrameBottomBg, backgroundColor: state.chatBoxExpandedFrameBottomBg }}
      >
        <div
          className="bodyTextInner"
          style={{ backgroundColor: state.chatBoxExpandedTextBgColor }}
        >
          <p className="bodyText" style={{color: state.chatBoxExpandedTextColor}}>
            {state.chatBoxExpandedParagraphOneText} <a className="tooltipIcon"></a>
          </p>
          <p className="bodyText" style={{color: state.chatBoxExpandedTextColor}}>
            Your total emissions are higher than average because you live in
            Australia, whose energy is still predominantly fossil generated. <a className="tooltipIcon"></a>
          </p>
        </div>
      </div>

      <ExpandCollapseToggle />
    </div>
  );
}
