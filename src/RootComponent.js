import React, { useEffect, useState, useContext } from "react";
import { Context } from "./Store";
import Chatbox from "./components/Chatbox/Chatbox";
import Footer from "./components/Footer";
import Iframe from "./components/Iframe";
import Topbar from "./components/Topbar";
import "./scss/typography.scss";
import "./scss/global.scss";
import axios from "axios";

import { browserName, deviceType, deviceDetect } from "react-device-detect";

export default function RootComponent(props) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  // const [ipAddress, setIpAddress] = useState("");
  // const [totalResourcesSize, setTotalResourcesSize] = useState(0);
  // const [countryFromIp, setCountryFromIp] = useState("Unknown location");
  // const [cityFromIp, setCityFromIp] = useState("Unknown city");

  const [state, dispatch] = useContext(Context);

  let resourceSizes = [];

  useEffect(() => {
    setLoading(true);

    console.log("-------- DEVICE TYPE: " + deviceDetect + " ----------");

    //Fetch country and city of the end user
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.country, response.city, response.query);
        dispatch({
          type: "SET_LOCATION",
          country: response.country,
          city: response.city,
        });
        dispatch({ type: "SET_IP_ADDRESS", payload: response.query });
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

        //Can use the below package to identify ip if the above fetch request isn't great
        // setIpAddress(ip.address());

        // Capture the page url
        // setWindowUrl(window.location.href);

        //capture the resources loaded by the page
        const loadedResources = window.performance.getEntriesByType("resource");
        loadedResources.forEach((resourceItem) => {
          resourceSizes.push(resourceItem.encodedBodySize);
        });
      })
      .then(() => {
        //calculate the combined total size of resources in kb
        const totalPageResourceSize =
          resourceSizes.reduce((a, b) => a + b, 0) / 1000;
        console.log(totalPageResourceSize);

        dispatch({
          type: "SET_TOTAL_PAGE_SIZE",
          payload: totalPageResourceSize,
        });
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
          {state.widgetType === "chatBox" && <Chatbox />}
          {state.widgetType === "topBar" && (
            <Topbar browserName={browserName} deviceType={deviceType} />
          )}
          {state.widgetType === "footer" && (
            <Footer browserName={browserName} deviceType={deviceType} />
          )}
          {state.widgetType === "iframeEmbed" && (
            <Iframe browserName={browserName} deviceType={deviceType} />
          )}
        </>
      )}
    </>
  );
}
