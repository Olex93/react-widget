import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/topbar.scss";
import "../scss/typography.scss";

export default function Topbar(props) {
  const { highlightColor, backgroundColor, companyName } = props;
  return (
    <Container fluid className="topbar"  style={{backgroundColor: backgroundColor}}>
      <Row className="topBarRow p-2">
        <Col className="col-3 topbarCol">
          <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
        </Col>
        <Col className="col-3 topbarCol">
          <p className="bodyText">I am a topbar style widget</p>
        </Col>
      </Row>
    </Container>
  );
}
