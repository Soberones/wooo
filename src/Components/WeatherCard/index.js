import React from "react";
//import { TextInput, Button } from "grommet";
import { StyledButton, StyledTextInput, Wrapper } from "./styles";

export class WeatherCard extends React.Component {
    state = {
        city: ''
    }
    render() {
        return (
            <Wrapper>
                <h1>Temperature: {this.props.temp}°</h1>
                <StyledTextInput
                    placeholder="type here"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    name="city"
                />
                <StyledButton
                    margin="right"
                    label="Get Weather"
                    onClick={this.props.sent}
                    disabled={!this.props.value}
                />
            </Wrapper>
        );
    }
}
