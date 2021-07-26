import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Chatbox from "./components/Chatbox";
import Iframe from "./components/Iframe";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./scss/typography.scss";
import "./scss/global.scss";

const ip = require("ip");

function App({ domElement }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [ipAddress, setIpAddress] = React.useState("");
  const [totalResourcesSize, setTotalResourcesSize] = React.useState(0);
  const [windowUrl, setWindowUrl] = React.useState("");

  const [backgroundColor, setBackgroundColor] = React.useState("#FFEEDB");
  const [highlightColor, setHighlightColor] = React.useState("#0A1D37");
  const [widgetType, setWidgetType] = React.useState("chatBox");
  const [companyName, setCompanyName] = React.useState("ClickNeutral");

  let resourceSizes = [];

  useEffect(() => {
    // Fetch data from reddit
    setLoading(true);
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        setToken(response.data.token);
        console.log(response)
        setIpAddress(ip.address());
        setWindowUrl(window.location.href);
        const loadedResources = window.performance.getEntriesByType("resource");
        loadedResources.forEach((resourceItem) => {
          resourceSizes.push(resourceItem.encodedBodySize);
        });
      })
      .then(() => {
        setTotalResourcesSize(resourceSizes.reduce((a, b) => a + b, 0) / 1000);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("error fetching from api");
      });
  }, []);

  return (
    <>
      {loading && "Loading..."}
      {error && error}

      {!loading && !error && (
        <>
          {widgetType === "chatBox" && (
            <Chatbox
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
              windowUrl={windowUrl}
              token={token}
            />
          )}
          {widgetType === "topBar" && (
            <Topbar
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
              windowUrl={windowUrl}
              token={token}
            />
          )}
          {widgetType === "footer" && (
            <Footer
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
              windowUrl={windowUrl}
              token={token}
            />
          )}
          {widgetType === "iframeEmbed" && (
            <Iframe
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
              windowUrl={windowUrl}
              token={token}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
