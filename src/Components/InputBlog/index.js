import React, { Component } from "react";
import { Input, Button } from "antd";
import { Wrapper } from "../InputBlogTest/styles";

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
			<Wrapper>
				<h1>Whats happen?</h1>
				<Input
					placeholder="Input label herdddde"
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
					disabled={!this.state.label}
				>
					Send
				</Button>
			</Wrapper>
		);
	}
}
