import React from "react";
import Box from "./views/box";

export default function Index() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#e002ec86,#f3b6b9db",
        display:'flex'
        
      }}
    >
        <h1 >Word Counter</h1>
      <div style={{display: "flex",justifyContent:'space-around'}} >
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
