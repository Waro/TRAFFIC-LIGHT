//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";


import {Trafficlight} from "./component/trafficlight.js";

ReactDOM.render(
<Trafficlight/>, 
document.querySelector("#app"),
);
