import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {Grid, Paper} from "@mui/material";

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Paper sx={{borderRadius: 4, p: 2, my: 5}}>
                <Grid container justifyContent={'space-between'}>
                    <Typography align={'left'} variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to={'/'}>UPayments Store</Link>
                    </Typography>
                    <Button color="inherit">Register</Button>
                </Grid>
            </Paper>
        </Box>
    )
}
