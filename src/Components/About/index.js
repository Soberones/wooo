import React from "react";
import Chart from "react-apexcharts";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { Spin, notification } from "antd";

const moment = extendMoment(Moment);

export class AboutPage extends React.Component {
	state = {
		options: {
			stroke: {
				curve: "smooth"
			},
			chart: {
				id: "basic-bar"
			},

			xaxis: {
				categories: [0]
			}
		},
		series: [
			{
				data: [],
				name: ""
			}
		],
		city: "",
		loader: true
	};
	openNotify = message => {
		console.log(message);
		return notification.open({
			message: "W A R N I N G",
			description: "You need to enter the correct city name",
			onClick: () => {
				console.log("Notification Clicked!");
			}
		});
	};

	componentDidMount() {
		console.log("Component did mount!");
		this.getWeatherChart();
	}

	// datarRange = () => {
	// 	const dayFrom = moment();
	// 	const dayTo = moment().add(-30, "days");
	// 	const dateRange = Array.from(moment.range(dayFrom, dayTo).by("day")).map(date => date.format("YYYY-MM-DD"));
	// 	//console.log(dateRange);
	// };

	getWeatherChart = async e => {
		try {
			const API_URL = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.workCity}&appid=927119ee633ce84d74b61b04a092af82`
			);
			const dataChart = await API_URL.json();
			console.log(dataChart);
			const temps = dataChart.list.map(item => item.main.temp);
			const celtemps = temps.map(item => item - 273.15);
			const celtempsnin = celtemps.map(item => item.toFixed(1));
			//console.log(celtempsnin);
			this.setState({
				series: [
					...this.state.series,
					{ ...this.state.series[0], data: celtempsnin }
				],
				loader: false
			});

			const dayFrom = moment();
			const dayTo = moment().add(-40, "days");
			const dateRange = Array.from(
				moment.range(dayTo, dayFrom).by("day")
			).map(date => date.format("DD-MM-YY"));
			// console.log(dateRange);

			this.setState({
				options: {
					...this.state.options,
					xaxis: {
						...this.state.options.xaxis,
						categories: dateRange
					}
				}
			});
			this.setState({
				series: [
					...this.state.series,
					{ ...this.state.series, name: this.props.workCity }
				],
				loader: false
			});
		} catch (err) {
			this.openNotify(err.message);
		}
	};

	render() {
		const { loader } = this.state;
		// console.log("sdsd", this.state.options.xaxis.categories);
		return (
			// <div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<h1>Weather chart for the last 30 days</h1>
				{!loader && (
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="area"
						width="1000"
					/>
				)}
				{loader && (
					<div>
						<Spin
							size="large"
							style={{
								padding: "10rem"
							}}
						/>
					</div>
				)}
			</div>
		);
	}
}
