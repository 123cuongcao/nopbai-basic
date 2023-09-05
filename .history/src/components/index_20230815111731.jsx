import React from "react";
import Box from "./views/box";

export default function Index() {
  return (
    <div
      style={{
        background: "linear-gradient(to right,#e002ec86,#f3b6b9db",
        display: "flex",
      }}
    >
      <div >
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
