import React, { useState } from "react";
import { WorldMap } from "grommet";

import { StyledWorldMap, Wrapper } from "./slyles";

export class WMaps extends React.Component {
    render() {
        return (
            <Wrapper>
                
                <StyledWorldMap
                    color="status-disabled"
                    places={[
                        {
                        location: [this.props.sentlat, this.props.sentlon],
                            color: "neutral-2"
                        }
                    ]}
                    selectColor="accent-2"
                />
            </Wrapper>
        );
    }
}
