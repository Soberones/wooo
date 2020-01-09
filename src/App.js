import React from "react";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import { Appdata } from "./Components/WeatherData";

import { AboutPage } from "./Components/About";

import { BlogHome } from "./Components/BlogHome";

import { InputBlogTest } from "./Components/InputBlogTest";

class App extends React.Component {
	maxId = 100

	state = {
		data: [
			{
				label: "ONE",
				description:
					"How to align along the cross axis when contained in a Box or along the column axis when contained in a Grid.",
				id: 1
			},
			{
				label: "TWO",
				description:
					"Custom label to be used by screen readers. When provided, an aria-label will be added to the element.",
				id: 2
			},
			{
				label: "Three",
				description:
					"Custom label to be used by screen readers. When provided, an aria-label will be added to the element.",
				id: 3
			}
		]
    };
    

    
// код Лёши
  deleteItem = (id) => {
      const { data } = this.state
      const updatedData = data.filter((item) => item.id !== id)
	  this.setState({ data: updatedData })};
	  

    // this.setState(({ todoData }) => {
    //   const idx = todoData.findIndex((el) => el.id === id);

    //   const newArray = [
    //     ...todoData.slice(0, idx),
    //     ...todoData.slice(idx + 1)
    //   ];

    //   return {
    //     todoData: newArray
    //   };
    // });
  



// леха написал
//   addItem = (newItem) => {
//     const { data } = this.state
//     const updatedData = [...data]
//     updatedData.push({...newItem, id: Symbol()})
//     this.setState({ data: updatedData })}

createBlogPost(label) {
	return {
		label,
		id: this.maxId++
	}
}

addItem = (data) => {
	const newItem = {
		label: data.label,
		description: data.description,
		id: this.maxId++

	}
	this.setState(({data}) => {
		const newArray = [
			...data,
			newItem
		]
		return {
			data: newArray
		}

	})
}



  // this.setState(({ todoData }) => {
  //   const idx = todoData.findIndex((el) => el.id === id);

  //   const newArray = [
  //     ...todoData.slice(0, idx),
  //     ...todoData.slice(idx + 1)
  //   ];

  //   return {
  //     todoData: newArray
  //   };
  // });


	render() {
		return (
			<div>
				<Layout>
					<Menu
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
						<InputBlogTest onItemAddet={this.addItem}/>
						<BlogHome list={this.state} onDelete={this.deleteItem} />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
