import React, { Component } from "react";

export class Store extends Component {
	
    Sett = () => {
        const data = this.props.workCity
    };
    data = () => this.props.workCity
	render() {  
        console.log(this.data())
        this.data()      
		return (
			<div>
				<h1>Store is here</h1>
			</div>
		);
	}
}
