import {Box, CircularProgress} from "@mui/material";

export default function PageLoader() {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={1} height={1}>
            <CircularProgress/>
        </Box>)
}
