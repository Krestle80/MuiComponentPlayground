import React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CalculatorButton from './CalculatorButton'
import {useState} from 'react'
import { Typography } from '@mui/material';

let CardPage = ()=>{
    const [textValue, setTextValue] = useState('')
    const addToTextValue = (name) =>{
        setTextValue(textValue + name)
    }
    const handleChange =(event) =>{
        setTextValue(event.target.value)
    }
    return(
        <Box>
            <Grid container spacing = {0}>
                <Grid item lg={2}></Grid>
                <Grid item lg={8}>
                    <Card sx={{mt:4}}>
                        <TextField id="filled-basic" fullWidth label="" sx={{ alignContent: 'end'}} variant="filled" value={textValue} onChange={handleChange}/>
                        {/* <Box sx={{width:'100%',height:'100%', display:'flex', justifyContent:'end'}}>
                            <Typography>{textValue}</Typography>
                        </Box> */}
                        <Box>
                            <Grid container spacing = {0} sx={{width: '100%'}}>
                                <Grid  item lg={1} sx={{width: '100%'}}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = {"sin"} addToTextValue = {addToTextValue} />
                                        <CalculatorButton name = "cos" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "tan" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "Log10" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "Ln" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "+" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "*" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "^2" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "^y" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "x" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "-" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "/" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "sqrt" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "^-y" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "=" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "7" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "4" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "1" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "c" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "8" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "5" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "2" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "0" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "9" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "6" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "3" addToTextValue = {addToTextValue}/>
                                        <CalculatorButton name = "s" addToTextValue = {addToTextValue}/>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={2}></Grid>
            </Grid>

        </Box>
    )
}

export default CardPage