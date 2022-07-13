//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import trafficlight from "./component/trafficlight.js";

ReactDOM.render(
<trafficlight/>, 
document.querySelector("#app"),
);
