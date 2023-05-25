import React, { useState } from "react";



//create your first component
const TrafficLight = () => {
	
	const [color, setColor] = useState("");

	let redLight = color === "red" ? "glow" : "red";
	let yellowLight = color === "yellow" ? "glow" : "yellow";
	let greenLight = color === "green" ? "glow" : "green";
	

	
	return (
		
		<div className="traffic-light container-fluid col-2">
			
			<div className="line1"></div>
			<div className="traffic-signal">
				<div onClick={prev => setColor("red")} className={`red ${redLight}`}></div>
        		<div onClick={prev => setColor("yellow")} className={`yellow ${yellowLight}`}></div>
        		<div onClick={prev => setColor("green")} className={`green ${greenLight}`}></div>
				
    		</div>
    			
		</div>
	);
};

export default TrafficLight