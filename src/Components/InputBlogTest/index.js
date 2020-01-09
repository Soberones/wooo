import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import {  } from "./styles";
import { Wrapper, StyledInput } from "../InputBlogTest/styles";


const { TextArea } = Input;

export class InputBlogTest extends Component {
	state = { label: "", description: "" };

	onLableChange = e => {
		console.log(e.target.value);
		this.setState({ label: e.target.value });
	};
	onDescriptionChange = e => {
		console.log(e.target.value);
		this.setState({ description: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.onItemAddet(this.state);
	};
	render() {
		return (
			<Wrapper >
				<h1>Whats happen?</h1>
				<Form onSubmit={this.onSubmit}>
					<StyledInput
						placeholder="Input label here"
						allowClear
						onChange={this.onLableChange}
						value={this.state.label}
					/>
					<TextArea rows={4}
						placeholder="Input description here"
						allowClear
						onChange={this.onDescriptionChange}
						value={this.state.description}
						style={{ marginTop: "10px"}}
					/>
					<Button type="primary" htmlType="submit">POST</Button>
				</Form>
			</Wrapper>
		);
	}
}
