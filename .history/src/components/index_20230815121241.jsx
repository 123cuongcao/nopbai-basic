import React from "react";
import Box from "./views/box";
import AbcIcon from "@mui/icons-material/Abc";
import Textarea from "./views/textarea";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { useState } from "react";

export default function Index() {

    const[text,setText]=useState('')
    const[word,setWord]=useState('');
    const[letter,setLetter]=useState('')
    const[paragraph,setParagraph]=useState('')

    const countWord=()=>{
        return text.split(' ').length;
        
    }

  return (
    <div
      style={{
        background: "linear-gradient(to right,#e002ec86,#f3b6b9db",
      }}
    >
      <h1 style={{ textAlign: "center"}}>
        {" "}
        <span>
          <AbcIcon fontSize="large" />
        </span>
        Word Counter
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", padding: "10px 30px 30px 30px" }}>
            <span>
              <NoteAltIcon />
            </span>
            <span>Word</span>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", padding: "10px 30px 30px 30px" }}>
            <span>
              <NoteAltIcon />
            </span>
            <span>Letter</span>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", padding: "10px 30px 30px 30px" }}>
            <span>
              <NoteAltIcon />
            </span>
            <span>Paragraph</span>
          </div>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
       {/* *******text******* */}
        <textarea onChange={(e)=>setText(e.target.value)} value={text} style={{width:'1000px',height:'250px',borderRadius:'10px',}} ></textarea>
        
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0px 10px 0px",
        }}
      >
        <button
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            color: "#fff",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          Click to UpperCase
        </button>
        <button
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Click to UpperCase
        </button>
      </div>
    </div>
  );
}
