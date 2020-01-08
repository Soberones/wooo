import React, { Component } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

export class InputBlog extends Component {
	state = { label: "", description: "" };

    //Send = (e) => console.log(this.state);
    Send = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
          label: ""
        });
      };
    
    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

	handleChangeInput = e => {
		this.setState({ label: e.target.value });
    };
    
    handleChangeDescription = e => {
		this.setState({ description: e.target.value });
    };
    onSubmit = (e) => (
        this.props.onItemAdded(this.state.label)
    )

	render() {
		return (
			<div style={{ width: 500, margin: "10px" }}>
				<h1>Whats happen?</h1>
				<Input
					placeholder="Input label here"
					allowClear
					onChange={this.handleChangeInput}
					value={this.state.label}
				/>
				<TextArea
					placeholder="Input description here"
					rows={4}
					allowClear
					onChange={this.handleChangeDescription}
					value={this.state.description}
					style={{ marginTop: "10px" }}
				/>
				<Button
					onClick={this.Send}
					type="primary"
					block
					style={{ marginTop: "10px" }}
				>
					Send
				</Button>
                <Input
					placeholder="Input label here"
					allowClear
                    onChange={this.onLableChange}
                    onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
