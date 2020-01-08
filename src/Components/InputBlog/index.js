import React, { Component } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

const onChange = e => {
	console.log(e);
};
export class InputBlog extends Component {
	render() {
		return (
			<div style={{ width: 500, margin: "10px" }}>
				<h1>Whats happen?</h1>
				<Input
					placeholder="input with clear icon"
					allowClear
					onChange={onChange}
				/>
				<TextArea
					placeholder="textarea with clear icon"
					rows={4}
					allowClear
					onChange={onChange}
					style={{ marginTop: "10px" }}
				/>
				<Button type="primary" block style={{ marginTop: "10px" }}>
					Primary
				</Button>
			</div>
		);
	}
}
