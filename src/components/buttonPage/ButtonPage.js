import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ThemeContext } from '@emotion/react';
import { yellow, red, lightBlue, orange, deepPurple, green, blueGrey, blue} from '@mui/material/colors';



let YellowButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    '&:hover': {
      backgroundColor: yellow[700]
    }
}))
let BlueButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800]
    }
}))
let RedButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
}))
let OrangeButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor:orange[800]
    }
}))
let GreenButton = styled(Button)(({theme}) =>({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[400],
    '&:hover': {
        backgroundColor:green[900]
    }
}))
let PurpleButton = styled(Button)(({theme}) =>({
    color: theme.palette.getContrastText(deepPurple[400]),
    backgroundColor: deepPurple[400],
    '&:hover': {
        backgroundColor:deepPurple[900]
    }
})) 
let LightButton = styled(Button)(({theme}) =>({
    color: theme.palette.getContrastText(blueGrey[200]),
    backgroundColor: blueGrey[200],
    '&:hover': {
        backgroundColor:blueGrey[300]
    }
}))
let DarkButton = styled(Button)(({theme}) =>({
    color: theme.palette.getContrastText(blueGrey[800]),
    backgroundColor: blueGrey[800],
    '&:hover': {
        backgroundColor:blueGrey[700]
    }
}))
let MuiButton = styled(Button)(({theme}) =>({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    '&:hover': {
        backgroundColor:blue[800]
    }
}))
let ButtonPage = ({themeChange}) =>{
    
    return(
        <Grid container spacing={2} sx = {{m:2, p:2}}>
            <Grid item lg={2} sx= {{ display: "row", height: '50%' }} ></Grid>
            <Grid item lg={8}>
                <Box sx={{width:'100%', height:'100%', backgroundColor: "primary.light"}}>
                    <Box sx = {{ width: "100%", height: '50%'}}>
                        <Paper sx = {{p:4, display: 'flex', justifyContent:"space-between", backgroundColor:'primary.dark'}}>

                                    <RedButton variant="contained" size="large" onClick={()=>{themeChange(1)}}>Red</RedButton>

                                    <YellowButton variant = "contained" size="large" onClick={()=>{themeChange(2)}}>Yellow</YellowButton>

                                    <BlueButton variant = "contained" size="large" onClick={()=>{themeChange(3)}}>Blue</BlueButton>

                        </Paper>
                    </Box>
                    <Box sx = {{ width: "100%", height: '50%'}}>
                        <Paper sx = {{p:4, display: "flex", justifyContent:'space-between', backgroundColor:'primary.dark'}}>

                                    <OrangeButton variant = "contained" size="large" onClick={()=>{themeChange(4)}}>Orange</OrangeButton>

                                    <GreenButton variant = "contained" size="large" color="success" onClick={()=>{themeChange(5)}}>Green</GreenButton>

                                    <PurpleButton variant = "contained" size="large" onClick={()=>{themeChange(6)}}>Purple</PurpleButton>

                        </Paper>
                    </Box>
                    <Box sx = {{ width: "100%", height: '50%'}}>
                        <Paper sx = {{p:4, display: "flex", justifyContent:'space-between', backgroundColor:'primary.dark'}}>

                                    <LightButton variant = "contained" size="large" onClick={()=>{themeChange(7)}}>Light</LightButton>

                                    <DarkButton variant = "contained" size="large" onClick={()=>{themeChange(8)}}>Dark</DarkButton>

                                    <MuiButton variant = "contained" size="large" onClick={()=>{themeChange(0)}}>Mui</MuiButton>

                        </Paper>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={2}></Grid>
        </Grid>
    )
}
export default ButtonPage