import React from 'react';
import {Container} from "@mui/material";

export default function PageTopWidgets(props: { children: React.ReactNode }) {
    return (
        <Container maxWidth={'lg'}>
            {props.children}
        </Container>
    );
}

