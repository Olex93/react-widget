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
  // const [localDomainId, setLocalDomainId] = useState('')
  // const getLocalDomainId = () => {
  //   setLocalDomainId(props.domElement.dataset["productkey"])
  // }

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

  const apiInit = async () => {
    console.log("Preview mode from api init: ", state.previewMode);

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
          return dispatch({
            placementID: response.data.placementID,
            collapsedStyleID: response.data.collapsedStyleID,
            collapsedBackgroundColor: response.data.collapsedBackgroundColor,
            collapsedForegroundColor: response.data.collapsedForegroundColor,
            expandedBackgroundColor: response.data.expandedBackgroundColor,
            upperFrameColor: response.data.upperFrameColor,
            lowerFrameColor: response.data.lowerFrameColor,
            showTitle: response.data.showTitle,
            titleColor: response.data.titleColor,
            standFirstForegroundColor: response.data.standFirstForegroundColor,
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
      .then(setLoading(false))
      .then(getPageResourceSizes())
      .catch((error) => {
        console.log(error);
      });
  };

  const getPageResourceSizes = async () => {
    let resourceSizes = [];

    const loadedResources = window.performance.getEntriesByType("resource");
    loadedResources.forEach((resourceItem) => {
      resourceSizes.push(resourceItem.transferSize);
    });
    console.log(window.performance.getEntriesByType("resource"))

    const totalPageResourceSize =
      resourceSizes.reduce((a, b) => a + b, 0) / 1024;
    console.log("Total page resources: " + totalPageResourceSize);


    var list = performance.getEntriesByType("resource");
    // For each "resource", display its *Size property values
    console.log("= Display Size Data");
    for (var i=0; i < list.length; i++) {
      console.log("== Resource[" + i + "] - " + list[i].name);
      if ("decodedBodySize" in list[i])
        console.log("... decodedBodySize[" + i + "] = " + list[i].decodedBodySize);
      else
        console.log("... decodedBodySize[" + i + "] = NOT supported");
  
      if ("encodedBodySize" in list[i])
        console.log("... encodedBodySize[" + i + "] = " + list[i].encodedBodySize);
      else
        console.log("... encodedBodySize[" + i + "] = NOT supported");
  
      if ("transferSize" in list[i])
        console.log("... transferSize[" + i + "] = " + list[i].transferSize);
      else
        console.log("... transferSize[" + i + "] = NOT supported");
    }


    dispatch({
      totalPageResourceSize: totalPageResourceSize,
    });
  };

  useEffect(() => {
    const productKey = props.domElement.dataset["productkey"];
    dispatch({ domainID: productKey });
  }, [props.domElement.dataset]);

  const { domainID } = state;
  useEffect(() => {
    
    setLoading(true);
    getPreviewMode();
    apiInit();
    
  }, [domainID]);

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
