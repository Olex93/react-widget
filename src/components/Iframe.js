import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../scss/iframe.scss";
import "../scss/typography.scss";
import axios from "axios";

export default function Iframe(props) {
  const { highlightColor, backgroundColor, companyName } = props;
  const [token, setToken] = useState("");

  function login() {
    console.log("hello");
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        setToken(response.data.token)
        console.log(response)
      });
  }

  return (
    <Container fluid className="iframe p-3">
      <Row>
        <Col>
          <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
          {!token && (
            <>
              <p className="bodyText">I am an iframe widget</p>
              <Button onClick={() => login()}>Log in using credentials</Button>
            </>
          )}
          {token && (
            <div>
              <p>You successfully logged in with credentials.</p>
              <p>This is your auth token returned from the api: {token}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
