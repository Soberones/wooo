import React, { Component } from "react";
import { Card, Col, Row, Icon } from "antd";


export class BlogHome extends Component {
	
	DeleteEvent = id => {
		const { onDelete } = this.props;
		onDelete(id);
	};

	ImportantEvent = id => console.log(id);
	render() {
		const { data } = this.props.list;

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
						onClick={this.DeleteEvent.bind(this, data.id)}
					/>,
					<Icon
						type="bulb"
						key="important"
						onClick={() => this.ImportantEvent(data.id)}
					/>
				]}
			>
				<p>{data.description}</p>
			</Card>
		));
		return (
			<div style={{ background: "#ECECEC", padding: "30px" }}>
				<Row gutter={16}>
					<Col span={8}>{listItems}</Col>
				</Row>
			</div>
		);
	}
}
