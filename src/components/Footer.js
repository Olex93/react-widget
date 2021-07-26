import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/footer.scss";
import "../scss/typography.scss";

export default function Footer(props) {
  const { highlightColor, backgroundColor, companyName } = props;
  return (
    <Container
      fluid
      className="footer"
      style={{ backgroundColor: backgroundColor }}
    >
      <Row className="footerRow">
        <Col className="col-3 footerCol">
          <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
        </Col>
        <Col className="footerCol">
          <p className="bodyText">I am a footer widget</p>
        </Col>
      </Row>
    </Container>
  );
}
