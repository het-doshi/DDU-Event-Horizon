import React from "react";
import "./Header.css"
import logo from "./ddulogo.JPG"

function Header() {
  return (
    <>
      <ul>
        <li>
          <img src={logo} alt="DDU logo" 
          style={{height:'35px', width: '35px', position: 'relative',left:'0px', top:'0px', borderRadius:'50%', margin:'6px'}} /> 
        </li>
        <li style={{position: 'relative', left:'25px', top:'6px', fontSize:'20px',  fontWeight: '700' }}>
            Welcome to DDU Event Horizon!
        </li>
      </ul>
    </>
  );
}

export default Header;
