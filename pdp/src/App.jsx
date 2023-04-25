import React from "react";
import ReactDOM from "react-dom";

import PDPContent from "./PDPContent";

import "./index.scss";

const App = () => (
  <>    
    <PDPContent /> 
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
