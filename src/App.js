import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Chatbox from "./components/Chatbox";
import Iframe from "./components/Iframe";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./scss/typography.scss";
import "./scss/global.scss";
import { browserName, deviceType, deviceDetect } from "react-device-detect";

// const ip = require("ip");

function App({ domElement }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [totalResourcesSize, setTotalResourcesSize] = useState(0);
  const [windowUrl, setWindowUrl] = useState("");
  const [countryFromIp, setCountryFromIp] = useState("Unknown location");
  const [cityFromIp, setCityFromIp] = useState("Unknown city");
  const [domainWhois, setDomainWhois] = useState("Unknown domain");
  const [backgroundColor, setBackgroundColor] = useState("#FFEEDB");
  const [highlightColor, setHighlightColor] = useState("#0A1D37");
  const [widgetType, setWidgetType] = useState("chatBox");
  const [companyName, setCompanyName] = useState("ClickNeutral");

  let resourceSizes = [];

  useEffect(() => {
    setLoading(true);

    console.log('-------- DEVICE TYPE: ' + deviceDetect + ' ----------' )

    //Fetch country and city of the end user
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setCountryFromIp(response.country);
        setCityFromIp(response.city);
        setIpAddress(response.query)
      })
      .catch((data, status) => {
        console.log("Unable to find location");
      });
    
    //Make POST request to the .NET API, then ...
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        //Once all data is loaded, but before the page size is calculated
        setLoading(false);

        // Add if authenticated logic
        setToken(response.data.token);
        //Can use the below package to identify ip if the above fetch request isn't great
        // setIpAddress(ip.address());
        // Capture the page url
        setWindowUrl(window.location.href);

        //capture the resources loaded by the page
        const loadedResources = window.performance.getEntriesByType("resource");
        loadedResources.forEach((resourceItem) => {
          resourceSizes.push(resourceItem.encodedBodySize);
        });
      })
      .then(() => {
        //calculate the combined total size of resources in kb
        setTotalResourcesSize(resourceSizes.reduce((a, b) => a + b, 0) / 1000);
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
              domainWhois={domainWhois}
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
