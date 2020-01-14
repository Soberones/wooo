import React from "react";
import { Button } from "antd";
import Chart from "react-apexcharts";
import Moment from "moment";
import { extendMoment } from "moment-range";


const moment = extendMoment(Moment);

export class AboutPage extends React.Component {
	state = {
		options: {
			chart: {
				id: "basic-bar"
			},
			xaxis: {
				categories: [0]
			}
		},
		series: [
			{
				name: "series-1",
				data: []
			}
		]
	};

	// datarRange = () => {
	// 	const dayFrom = moment();
	// 	const dayTo = moment().add(-30, "days");
	// 	const dateRange = Array.from(moment.range(dayFrom, dayTo).by("day")).map(date => date.format("YYYY-MM-DD"));
	// 	//console.log(dateRange);
	// };

	getWeatherChart = async e => {
		e.preventDefault();
		const API_URL = await fetch(
			`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=927119ee633ce84d74b61b04a092af82`
		);
		const dataChart = await API_URL.json();

		const temps = dataChart.list.map(item => item.main.temp);
		const celtemps = temps.map(item => item - 273.15);
		const celtempsnin = celtemps.map(item => item.toFixed(1));
		//console.log(celtempsnin);
		this.setState({
			series: [
				...this.state.series,
				{ ...this.state.series[0], data: celtempsnin }
			]
		});

		const dayFrom = moment();
		const dayTo = moment().add(-40, "days");
		const dateRange = Array.from(moment.range(dayTo,  dayFrom).by("day")).map(date => date.format("DD-MM-YY"));
		console.log(dateRange);

		this.setState({
			options:{
				...this.state.options,
				xaxis: {
					...this.state.options.xaxis,
					categories: dateRange,
				}
			},

		});
	};

	render() {
		console.log("sdsd", this.state.options.xaxis.categories);
		return (
			<div>
			{/* // <div style={{flexdirection: 'column', alignitems: 'center',	width: "100%",margin: 'flex', padding: '10px'}}> */}
		<h1>TEst</h1>
				<Button onClick={this.getWeatherChart} />
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="area"
					width="700"
				/>
			</div>
		);
	}
}
