import React from "react";

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
							color: "#1890FF"
						}
					]}
					selectColor="accent-2"
				/>
			</Wrapper>
		);
	}
}
