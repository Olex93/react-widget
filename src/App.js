import React from "react";
import RootComponent from "./RootComponent";
import "./App.css";
import {Store} from "./Store";

// const ip = require("ip");

function App({ domElement }) {
  return (
    <Store domElement={domElement}>
      <RootComponent domElement={domElement} />
    </Store>
  );
}

export default App;
