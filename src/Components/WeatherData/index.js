import React, { useState } from "react";
import { WeatherCard } from "../WeatherCard";
import { WMaps } from "../WorldMap";

export class Appdata extends React.Component {
    state = {
        value: "",
        temp: "",
        lat: 0,
        lon: 0,
    };
    handleChange = e => {
        this.setState({ value: e.target.value });
    };
    getWeather = async () => {
        const API_URL = await fetch(
            `https://openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=b6907d289e10d714a6e88b30761fae22`
        );
        const data = await API_URL.json();
        this.setState({ temp: data.main.temp });
        console.log(data);
        this.setState({ lat: data.coord.lat });
        this.setState({ lon: data.coord.lon });
    };
    render() {
        return (
            <div>
                <WeatherCard
                    sent={this.getWeather}
                    temp={this.state.temp}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <WMaps sentlat={this.state.lat} sentlon={this.state.lon} />
            </div>
        );
    }
}
