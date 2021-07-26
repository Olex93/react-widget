import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/chatbox.scss";
import "../scss/typography.scss";

export default function Chatbox(props) {
  const {
    highlightColor,
    backgroundColor,
    companyName,
    ipAddress,
    totalResourcesSize,
    windowUrl,
    token
  } = props;
  return (
    <div
      fluid
      className="chatbox-wrapper p-3"
      style={{ backgroundColor: backgroundColor }}
    >
      <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
      <p className="bodyText">I am a chatbox style widget</p>
      <p>Your ip address is {ipAddress}</p>
      <p>
        The total size of all resources loaded by this page is{" "}
        {totalResourcesSize} kb
      </p>
      <p>You have sent an authentication request to an api and received this token back: {token}</p>
      <p>Your url is {windowUrl}</p>
    </div>
  );
}
