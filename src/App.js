import React from "react";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import { Appdata } from "./Components/WeatherData";

import { AboutPage } from "./Components/About";

import { BlogHome } from "./Components/BlogHome";

class App extends React.Component {
	render() {
		return (
			<div>
				<Layout>
					<Menu
						theme=""
						mode="horizontal"
						defaultSelectedKeys={["2"]}
						style={{ lineHeight: "50px" }}
					>
						<Menu.Item>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/about">About</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/blog">Blog</Link>
						</Menu.Item>
					</Menu>
				</Layout>

				<Switch>
					<Route exact path="/">
						<Appdata />
					</Route>

					<Route path="/about">
						<AboutPage />
					</Route>

					<Route path="/blog">
						<BlogHome />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
