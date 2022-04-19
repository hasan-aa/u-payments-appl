import Header from "./Header";
import {Box} from "@mui/material";
import React from "react";
import PageTopWidgets from "./PageTopWidgets";

type MainLayoutProps = {
    children: React.ReactNode,
}
export default function MainLayout(props: MainLayoutProps) {

    return <Box bgcolor={'grey.300'} height={'100vh'} overflow={'auto'}>
        <PageTopWidgets>
            <Header/>
        </PageTopWidgets>

        {props.children}
    </Box>
}
