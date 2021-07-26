import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/topbar.scss";
import "../scss/typography.scss";

export default function Footer(props) {
  const { highlightColor, backgroundColor, companyName } = props;
  return (
    <Container fluid className="topbar">
      <Row className="topBarRow">
        <Col className="col-3 topbarCol">
          <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
        </Col>
        <Col className="topbarCol">
          <p className="bodyText">I am a footer widget</p>
        </Col>
      </Row>
    </Container>
  );
}
