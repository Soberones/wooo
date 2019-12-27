import React from "react";
import { HeaderBar } from "./Components/Header";
import { Appdata } from "./Components/WeatherData";
import { WMaps } from "./Components/WorldMap/index";

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <Appdata />
            </div>
        );
    }
}

export default App;
