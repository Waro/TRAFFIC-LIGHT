import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export function trafficLight () {
	const [selectedColor, setselectedColor] = useEstate ("red")
	return(
	<div className = "structure">
		<div className = "light red">w</div>
		<div className = "light yellow">e</div>
		<div className = "light green">4</div>
	</div>
	);
}