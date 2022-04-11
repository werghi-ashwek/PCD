import React from "react";

import GaugeChart from 'react-gauge-chart';
import "../style/Charts.css"

export default function Charts() {
    return (
        <div ClassName="chartstyle">
        <GaugeChart id="gauge-chart3"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={0.10}
            textColor={"#FFFFFF"}
	
        />
        </div>
    );
}
