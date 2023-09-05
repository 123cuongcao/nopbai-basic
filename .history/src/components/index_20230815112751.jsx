import React from "react";
import Box from "./views/box";
import AbcIcon from '@mui/icons-material/Abc';

export default function Index() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#e002ec86,#f3b6b9db",
     
 
        
      }}
    >
        <h1 style={{textAlign:'center'}}> <span><AbcIcon/></span>Word Counter</h1>
      <div style={{display: "flex",justifyContent:'space-around'}} >
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
