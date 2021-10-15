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
  
  const headingFontColor = {
    color: state.titleColor,
  }
  const standFirstFontColor = {
    color: state.standFirstForegroundColor,
  }
  const bodyFontColor = {
    color: state.bodyForegroundColor
  }

  // const standFirstInlineStyles = Object.assign({}, standFirstFontColor, JSON.parse(state.standFirstFont))
  const standFirstInlineStyles = {...standFirstFontColor, ...JSON.parse(state.standFirstFont)}
  const headingStyleObject = {...headingFontColor, ...JSON.parse(state.titleFont)}
  const bodyFontStyleObject = {...bodyFontColor, ...JSON.parse(state.bodyFont)}
  // const headingStyleObject = JSON.parse(state.titleFont)
  // headingStyleObject.color = state.titleColor
  // const standFirstStyleObject = JSON.parse(state.standFirstFont)
  // standFirstStyleObject.color = state.standFirstForegroundColor


  return (
    <div  className={`expanded chatbox-wrapper ${state.previewMode === 'true' ? ' pinnedToDiv' : '' }`}>
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
            style={headingStyleObject}
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
            style={standFirstInlineStyles}
          >
            {stringStart}{" "}
            <span style={{ color: state.standFirstAccentColor }}>
              {state.chatBoxExpandedCo2Today} CO<sub>2</sub>e
            </span>
            {stringMiddle}{" "}
            <span style={{ color: state.standFirstAccentColor }}>
              {state.chatBoxExpandedCo2Total} CO<sub>2</sub>e
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
          <p className="bodyText" style={bodyFontStyleObject}>
            {state.body} {/* <a className="tooltipIcon"></a> */}
            <span className="infoIcon">
              <InfoIcon />
            </span>
          </p>
          <p className="bodyText" style={bodyFontStyleObject}>
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
