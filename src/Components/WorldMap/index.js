import React, { useState } from "react";
import { WorldMap } from "grommet";
import { Appdata } from "../WeatherData";

export class WMaps extends React.Component {
    render() {
        return (
            <div>
                <h1>hgh{this.props.sentlat}</h1>
                <WorldMap
                    color="neutral-1"
                    places={[
                        {
                            location: [55, 52],
                            color: "accent-2"
                        }
                    ]}
                    selectColor="accent-2"
                />
            </div>
        );
    }
}
