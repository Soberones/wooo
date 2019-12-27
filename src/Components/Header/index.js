import React from "react";
import { Header, Text, Heading } from "grommet";


export function HeaderBar() {
    return (
        <Header background="neutral-3">
            <Heading level={3} margin="none">
                <strong>Weather</strong>
            </Heading>
        </Header>
    );
}


