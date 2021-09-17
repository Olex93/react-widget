import React, { useContext } from "react";
import { Context } from "../../Store";
import ExpandCollapseToggle from "../ExpandCollapseToggle";
import InfoIcon from "../svgs/InfoIcon";

export default function ChatboxExpanded() {
  const [state] = useContext(Context);

  // const processedString = state.chatBoxExpandedStandFirstText.replace('{today}', <StringSpan text={state.chatBoxExpandedCo2Today} />).replace('{total}', state.chatBoxExpandedCo2Total)
  const stringStart = state.standFirst.substring(
    0,
    state.standFirst.indexOf("{")
  );
  const stringMiddle = state.standFirst.substring(
    state.standFirst.indexOf("}") + 1,
    state.standFirst.lastIndexOf("{")
  );
  const stringEnd = state.standFirst.substring(
    state.standFirst.lastIndexOf("}") + 1
  );

  return (
    <div fluid className={`expanded chatbox-wrapper ${state.previewMode ? "pinnedToDiv" : "" }`}>
      <div
        className="headerSection"
        style={{
          backgroundColor: state.upperFrameColor,
          borderColor: state.upperFrameColor,
        }}
      >
        {state.showTitle === true && (
          <p
            className="heading"
            style={{
              color: state.titleColor,
              fontFamily: state.titleFont,
            }}
          >
            {state.title}
          </p>
        )}
      </div>
      <div
        className="standFirstSection"
        style={{
          borderColor: state.upperFrameColor,
          backgroundColor: state.upperFrameColor,
        }}
      >
        <div
          className="standFirstInner"
          style={{ backgroundColor: state.expandedBackgroundColor }}
        >
          <p
            className="standFirstText"
            style={{
              color: state.standFirstForegroundColor,
              fontFamily: state.standFirstFont,
            }}
          >
            {stringStart}{" "}
            <span style={{ color: state.standFirstAccentColor }}>
              {state.chatBoxExpandedCo2Today}
            </span>
            {stringMiddle}{" "}
            <span style={{ color: state.standFirstAccentColor }}>
              {state.chatBoxExpandedCo2Total}
            </span>
            {stringEnd}
          </p>
        </div>
      </div>
      <div
        className="bodyTextSection"
        style={{
          borderColor: state.lowerFrameColor,
          backgroundColor: state.lowerFrameColor,
        }}
      >
        <div
          className="bodyTextInner"
          style={{ backgroundColor: state.expandedBackgroundColor }}
        >
          <p className="bodyText" style={{ color: state.bodyForegroundColor }}>
            {state.body} {/* <a className="tooltipIcon"></a> */}
            <span className="infoIcon">
              <InfoIcon />
            </span>
          </p>
          <p className="bodyText" style={{ color: state.bodyForegroundColor }}>
            Your total emissions are higher than average because you live in
            Australia, whose energy is still predominantly fossil generated.{" "}
            {/* <a className="tooltipIcon"></a> */}
            <span className="infoIcon">
              <InfoIcon />
            </span>
          </p>
        </div>
      </div>

      <ExpandCollapseToggle />
    </div>
  );
}
