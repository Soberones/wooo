import React from "react";
import { Header, Text, Heading, Menu } from "grommet";
import { SwitchComponets } from "../Switchs";
import { link, Router, Link } from "react-router-dom";

export function HeaderBar() {
    
    return (
        <Header background="neutral-3">
            <Heading level={3} margin="none">
                <strong>Weather</strong>
            </Heading>
            {/* <Button label="Home" /> */}
            <Menu
                label="Home" 
                items={[{ label: <Link to="/about">logout</Link> }]}
            />
            <Text>Weather</Text>
        </Header>
    );
}
