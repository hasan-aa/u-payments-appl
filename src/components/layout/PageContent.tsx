import React from 'react';
import {Container} from "@mui/material";

export default function PageContent(props: { children: React.ReactNode }) {
    return (
        <Container maxWidth={'md'}>
            {props.children}
        </Container>
    );
}

