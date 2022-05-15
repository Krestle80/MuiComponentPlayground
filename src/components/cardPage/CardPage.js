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
    const [calcValue, setCalcValue] = useState({
        sign:"",
        display:"0",
        value:0,
        res:0
    })
    const addIntegerToCalcValue = (name) =>{
        console.log(name)
        setCalcValue({
            ...calcValue,
            value: calcValue.value === 0 && name === '0' 
                ? '0' 
                : calcValue.value === 0 
                ? name
                // : calcValue.value % 1 === 0 
                // ? Number(calcValue.value + name)
                : calcValue.value + name,
            display: calcValue.display === 0 && name === '0'
            ? 0
            : calcValue.display == '0' 
            ? name
            :calcValue.display + name,
            res: !calcValue.sign ? 0 : calcValue.res

        })
    }
    const handleSigns = (name) =>{
        setCalcValue({
            ...calcValue,
            sign: calcValue.value === 0 ? "" : name,
            display: calcValue.value + name,
            res: !calcValue.res && calcValue.value ?  calcValue.value: calcValue.res,
            value : !calcValue.res && calcValue.value ? 0 : calcValue.value
        })
    }
    const clear = () =>{
        setCalcValue({
            sign:"",
            display:"0",
            value:0,
            res:0
        })
    }
    const equals = () =>{
        if( calcValue.value && calcValue.sign){
            const math = (a,b,sign) => 
                calcValue.value === "0" && calcValue.sign === "/"
                ? "Can't divide with 0"
                :sign === '+' 
                ? a + b 
                : sign === '-' 
                ? a - b 
                : sign === '*'
                ? a * b 
                : sign === '/'
                ? a / b 
                : sign === '^2' 
                ? a * a
                : sign === 'sqrt'
                ? Math.sqrt(a)
                :sign === "^y"
                ? Math.pow(a, b)
                : Math.pow(a, (1/b));
            
                 let answer =  math(Number(calcValue.res), Number(calcValue.value),calcValue.sign)
                 console.log(answer, Number(calcValue.res), Number(calcValue.value))
            setCalcValue({
                ...calcValue,
                display:answer,
                res : 0,
                value: answer,
                sign: ""
            })
        }
    }
    const props = {addIntegerToCalcValue, handleSigns, clear , equals}
    const handleChange =(event) =>{
        setCalcValue(event.target.value)
    }
    return(
        <Box>
            <Grid container spacing = {0}>
                <Grid item lg={2}></Grid>
                <Grid item lg={8}>
                    <Card sx={{mt:4}}>
                        <TextField id="filled-basic" fullWidth label="" sx={{ alignContent: 'end'}} variant="filled" value={calcValue.display} onChange={handleChange}/>
                        {/* <Box sx={{width:'100%',height:'100%', display:'flex', justifyContent:'end'}}>
                            <Typography>{calcValue}</Typography>
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
                                        <CalculatorButton name = {"sin"} props = {props} />
                                        <CalculatorButton name = "cos" props = {props}/>
                                        <CalculatorButton name = "tan" props = {props}/>
                                        <CalculatorButton name = "Log10" props = {props}/>
                                        <CalculatorButton name = "Ln" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "+" props = {props} />
                                        <CalculatorButton name = "*" props = {props} />
                                        <CalculatorButton name = "^2" props = {props}/>
                                        <CalculatorButton name = "^y" props = {props}/>
                                        <CalculatorButton name = "(" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "-" props = {props} />
                                        <CalculatorButton name = "/" props = {props} />
                                        <CalculatorButton name = "sqrt" props = {props}/>
                                        <CalculatorButton name = "^-y" props = {props}/>
                                        <CalculatorButton name = ")" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "7" props = {props}/>
                                        <CalculatorButton name = "4" props = {props}/>
                                        <CalculatorButton name = "1" props = {props}/>
                                        <CalculatorButton name = "c" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "8" props = {props}/>
                                        <CalculatorButton name = "5" props = {props}/>
                                        <CalculatorButton name = "2" props = {props}/>
                                        <CalculatorButton name = "0" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "9" props = {props}/>
                                        <CalculatorButton name = "6" props = {props}/>
                                        <CalculatorButton name = "3" props = {props}/>
                                        <CalculatorButton name = "=" props = {props}/>
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