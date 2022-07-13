import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export function Trafficlight() {
	
	const [selectedColor, setSelectedColor] = useState ("red");
	
	
	return (
		<div>
	<div className ="position">
	<div className = "structure">
		<div 
			onClick={() => setSelectedColor("red")}
			className = {"light red" + " " +  ( (selectedColor === "red") ? "glow" :"")}
			>
		</div>
		<div 
			onClick={() => setSelectedColor("yellow")}
			className = {"light yellow" + " " + ( (selectedColor === "yellow") ? "glow" :"")}
			>
		</div>
		<div 
			onClick={() => setSelectedColor("green")}
			className = {"light green" + " " +  ( (selectedColor === "green") ? "glow" :"")}
			>
		</div>
	</div>
	</div>
	<div className ="controller d-flex justify-content-center">
		<Button 
		onClick={() => setBackground("purple")}
		variant="primary"
		id="purple">Change Color</Button>{' '}
	</div >
	</div>
	);
} 
