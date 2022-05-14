import React from 'react';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

let BaseHeader = () =>{
    return(
        <Box>
            
            <AppBar>
            <Toolbar sx= {{ display: "flex", justifyContent: "space-between"}}>
                <Box>Logo?</Box>
                <Box>Light</Box>
            </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </Box>
    )
}
export default BaseHeader