import React from "react";
import Button from '@mui/material/Button'


let CalculatorButton = ({name, addToTextValue}) => {
    return(
        <Button key = {name} sx={{width: '100%', borderRadius:'0px', height:'100%'}} onClick={()=>{console.log(addToTextValue, "addto textValue");addToTextValue(name); }}>{name}</Button>
    )
}
export default CalculatorButton