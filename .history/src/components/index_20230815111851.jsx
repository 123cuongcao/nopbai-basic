import React from "react";
import Box from "./views/box";

export default function Index() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#e002ec86,#f3b6b9db",
        
      }}
    >
      <div style={{display: "flex",justifyContent:'center'}} >
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}