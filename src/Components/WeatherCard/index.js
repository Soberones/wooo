import React from "react";
//import { TextInput, Button } from "grommet";
import { StyledTextInput, Wrapper } from "./styles";
import {Form, Button} from 'antd'

export class WeatherCard extends React.Component {
    state = {
        city: ''
    }
    render() {
        return (
            <Wrapper>
                <Form onSubmit={this.props.sent}>

                <h1>Temperature: {this.props.temp}°</h1>
                <StyledTextInput
                    placeholder="type here"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    name="city"
                />
                {/* <StyledButton
                    margin="right"
                    label="Get Weather"
                    onClick={this.props.sent}
                    disabled={!this.props.value}
                /> */}
                <Button label="Get Weather" type="primary" disabled={!this.props.value} shape="round" htmlType="submit" style={{ marginTop: "5px"}}>POST</Button>
                </Form>
            </Wrapper>
        );
    }
}
