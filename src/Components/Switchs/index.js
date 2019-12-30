import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "../About";
import { HeaderBar } from "../Header";

export class SwitchComponets extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<HeaderBar />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
			</Switch>
		);
	}
}
