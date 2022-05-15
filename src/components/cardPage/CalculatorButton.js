import React from "react";
import Button from '@mui/material/Button'


let CalculatorButton = ({name, props }) => {
    return(
        <Button key = {name} sx={{width: '100%', borderRadius:'0px', height:'100%'}} onClick={()=>{
            if(name === '+' || name === '-' || name === '*' || name === '/' || name === '^2' || name === "sqrt"|| name === "^y" || name ==="^-y" ){props.handleSigns(name)}
            else if (name === 'c'){
                props.clear()
            }
            else if (name === '=') props.equals()
            else    props.addIntegerToCalcValue(name); 
        }}>{name}</Button>
    )
}
export default CalculatorButton