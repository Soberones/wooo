import React from "react";
//import { TextInput, Button } from "grommet";
import { StyledButton, StyledTextInput, Wrapper } from "./styles";

export class WeatherCard extends React.Component {
    render() {
        return (
            <Wrapper>
                <h1>Temperature: {this.props.temp}°</h1>
                <StyledTextInput
                    placeholder="type here"
                    onChange={this.props.onChange}
                />
                <StyledButton
                    margin="right"
                    label="Get Weather"
                    onClick={this.props.sent}
                />
            </Wrapper>
        );
    }
}
