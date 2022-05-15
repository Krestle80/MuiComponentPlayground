import React from 'react';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

let BaseHeader = () =>{
    return(
        <Box>
            
            <AppBar>
            <Toolbar sx= {{ display: "flex", justifyContent: "space-between"}}>
                <Box>Logo?</Box>
                <Box sx={{display:"flex", justifyContent:"end"}}>
                    <Link to='/'>
                        <Typography sx={{mr:2}}>Themes</Typography>  
                    </Link>
                    <Link to='/calculator'>
                    <Typography sx={{mr:2}}>Calculator</Typography>
                    </Link>
                </Box>
            </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </Box>
    )
}
export default BaseHeader