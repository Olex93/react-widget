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
  const [state, dispatch] = useContext(Context);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  //PREVIOUS STATE VARS THAT NOW NEED MOVING TO GLOBAL
  // const [ipAddress, setIpAddress] = useState("");
  // const [totalResourcesSize, setTotalResourcesSize] = useState(0);
  // const [countryFromIp, setCountryFromIp] = useState("Unknown location");
  // const [cityFromIp, setCityFromIp] = useState("Unknown city");

  const getPreviewMode = () => {
    const domPreviewMode = props.domElement.dataset["previewmode"];
    console.log("Dom preview mode: ", domPreviewMode);
    dispatch({ previewMode: domPreviewMode });
  };

  const apiInit = () => {
    console.log("Preview mode from api init: ", state.previewMode);

    if (state.previewMode == false) {
      // console.log("-------- DEVICE TYPE: " + deviceDetect + " ----------");

      //Fetch country and city of the end user
      // fetch("https://extreme-ip-lookup.com/json/")
      //   .then((res) => res.json())
      //   .then((response) => {
      //     console.log(response.country, response.city, response.query);
      //     dispatch({
      //       type: "SET_LOCATION",
      //       country: response.country,
      //       city: response.city,
      //     });
      //     dispatch({ type: "SET_IP_ADDRESS", payload: response.query });
      //   })
      //   .catch((data, status) => {
      //     console.log("Unable to find location");
      //   });

      axios
        .get(
          `https://clickneutral.fourleafsecure.co.uk/api/widget/config/${state.domainID}`,
          {
            // axios.get('https://clickneutral.fourleafsecure.co.uk/api/widget/config/1B9AB9FC-3879-4278-9E20-D069E5AE5604', {
            // axios.get('https://clickneutral.fourleafsecure.co.uk/api/widget/config/14F961E4-363C-4D83-9926-CAC84CC32427', {

            headers: {
              // 'ProductKey': 'C092F5F4-CE2E-47AD-93A8-CA14B0C65F38'
              // 'ProductKey': '1B9AB9FC-3879-4278-9E20-D069E5AE5604'
              ProductKey: state.domainID,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            dispatch({
              placementID: response.data.placementID,
              collapsedStyleID: response.data.collapsedStyleID,
              collapsedBackgroundColor: response.data.collapsedBackgroundColor,
              collapsedForegroundColor: response.data.collapsedForegroundColor,
              expandedBackgroundColor: response.data.expandedBackgroundColor,
              upperFrameColor: response.data.upperFrameColor,
              lowerFrameColor: response.data.lowerFrameColor,
              showTitle: response.data.showTitle,
              titleColor: response.data.titleColor,
              standFirstForegroundColor:
                response.data.standFirstForegroundColor,
              standFirstAccentColor: response.data.standFirstAccentColor,
              bodyForegroundColor: response.data.bodyForegroundColor,
              iconColor: response.data.iconColor,
              logoColor: response.data.logoColor,
              titleFont: response.data.titleFont,
              standFirstFont: response.data.standFirstFont,
              bodyFont: response.data.bodyFont,
              title: response.data.title,
              standFirst: response.data.standFirst,
              body: response.data.body,
              domain: response.data.domain,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      //Make POST request to the .NET API, then ...
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((response) => {
          //Once all data is loaded, but before the page size is calculated

          // Add if authenticated logic

          //Can use the below package to identify ip if the above fetch request isn't great
          // setIpAddress(ip.address());

          // Capture the page url
          // setWindowUrl(window.location.href);

          //capture the resources loaded by the page
          const loadedResources =
            window.performance.getEntriesByType("resource");
          loadedResources.forEach((resourceItem) => {
            resourceSizes.push(resourceItem.encodedBodySize);
          });
        })
        .then(() => {
          //calculate the combined total size of resources in kb
          const totalPageResourceSize =
            resourceSizes.reduce((a, b) => a + b, 0) / 1000;
          console.log("Total page resources: " + totalPageResourceSize);

          dispatch({
            type: "SET_TOTAL_PAGE_SIZE",
            payload: totalPageResourceSize,
          });
        })
        .catch((e) => {
          setError("error fetching from api");
        });
    }
  };

  let resourceSizes = [];

  useEffect(() => {
    setLoading(true);
    //Set domain ID to key taken from script passed in from DOM
    const productKey = props.domElement.dataset["productkey"];
    // console.log(props.domElement)
    dispatch({ domainID: productKey });
    getPreviewMode();
  }, []);

  useEffect(() => {
    console.log('Preview mode from specific useEffect', state.previewMode)
    apiInit();
    setLoading(false);
  }, [state.previewMode]);

  return (
    <>
      {loading && "Loading..."}
      {error && error}

      {!loading && !error && (
        <>
          {state.placementID === 3 && <Chatbox />}
          {state.placementID === 1 && <Topbar />}
          {state.placementID === 4 && <Footer />}
          {state.placementID === 5 && <Iframe />}
        </>
      )}
    </>
  );
}
