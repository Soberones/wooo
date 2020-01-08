import React, { Component } from "react";
import { Card, Col, Row, Icon } from "antd";
import { InputBlog } from "../InputBlog";

export class BlogHome extends Component {
	render() {
		const { data } = this.props.list;

		const DeleteEvent = id => console.log(id);

		const ImportantEvent = id => console.log(id);

		const listItems = data.map(data => (
			<Card
				title={data.label}
				key={data.id}
				bordered={1}
				style={{ width: 500, margin: "10px" }}
				actions={[
					<Icon
						type="delete"
						key="dellete"
						onClick={DeleteEvent.bind(this, data.id)}
					/>,
					<Icon
						type="bulb"
						key="important"
						onClick={() => ImportantEvent(data.id)}
					/>
				]}
			>
				<p>{data.description}</p>
			</Card>
		));
		return (
			<div style={{ background: "#ECECEC", padding: "30px" }}>
                <InputBlog />
				<Row gutter={16}>
					<Col span={8}>{listItems}</Col>
				</Row>
                
				
			</div>
		);
	}
}
