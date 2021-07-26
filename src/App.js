import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Chatbox from "./components/Chatbox";
import Iframe from "./components/Iframe";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./scss/typography.scss";
import "./scss/global.scss";
import { browserName, deviceType } from "react-device-detect";

const ip = require("ip");

function App({ domElement }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [totalResourcesSize, setTotalResourcesSize] = useState(0);
  const [windowUrl, setWindowUrl] = useState("");
  const [countryFromIp, setCountryFromIp] = useState("Unknown location");
  const [cityFromIp, setCityFromIp] = useState("Unknown city");
  const [backgroundColor, setBackgroundColor] = useState("#FFEEDB");
  const [highlightColor, setHighlightColor] = useState("#0A1D37");
  const [widgetType, setWidgetType] = useState("chatBox");
  const [companyName, setCompanyName] = useState("ClickNeutral");

  let resourceSizes = [];

  useEffect(() => {
    // Fetch data from reddit
    setLoading(true);

    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setCountryFromIp(response.country);
        setCityFromIp(response.city);
      })
      .catch((data, status) => {
        console.log("Unable to find location");
      });

    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        setToken(response.data.token);
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
              browserName={browserName}
              deviceType={deviceType}
              countryFromIp={countryFromIp}
              cityFromIp={cityFromIp}
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
              browserName={browserName}
              deviceType={deviceType}
              countryFromIp={countryFromIp}
              cityFromIp={cityFromIp}
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
              browserName={browserName}
              deviceType={deviceType}
              countryFromIp={countryFromIp}
              cityFromIp={cityFromIp}
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
              browserName={browserName}
              deviceType={deviceType}
              countryFromIp={countryFromIp}
              cityFromIp={cityFromIp}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
