import React from 'react'
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function Box() {
  return (
    <div style={{background:'linear-gradient(to right,#7D0AB8,#C2228C',width:'200px',display:'flex',justifyContent:'center',color:'#ffff'}}>
      <div style={{display:'flex',padding:"10px 30px 30px 20px"}}>
      <span><NoteAltIcon/></span>
      <span>Word</span>
      </div>
        

    </div>
  )
}
