import React from "react";
import { Button } from 'antd'
export class AboutPage extends React.Component {
	state = {
		
	}
	clg = (console.log("object")) 

	getWeatherChart = async (e) => {
        
            e.preventDefault();
            const API_URL = await fetch(
                `https://openweathermap.org/data/2.5/weather?q=Elk&appid=b6907d289e10d714a6e88b30761fae22`
            );
			const dataChart = await API_URL.json();

            console.log(dataChart);
        
    };
	
	render() {
		
		return (
			<div><h1>df</h1>
			<Button onClick={this.getWeatherChart}/>
			</div>
		);
	}
}
