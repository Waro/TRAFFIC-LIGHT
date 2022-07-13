import React from "react";

export function home() {
	
	const [selectedColor, setSelectedColor] = useEstate ("red");

	return (
	<div className = "structure">
		<div 
			onClick={() => setSelectedColor("red")}
			className = {"light red" + ((selectedColor === "red") ? "glow" :"")}>
		</div>
		<div 
			onClick={() => setSelectedColor("yellow")}
			className = {"light yellow" + ((selectedColor === "yellow") ? "glow" :"")}>
		</div>
		<div 
			onClick={() => setSelectedColor("green")}
			className = {"light green" + ((selectedColor === "green") ? "glow" :"")}>
		</div>
	</div>
	);
} 
