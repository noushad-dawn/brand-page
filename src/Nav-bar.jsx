import React from "react";

const Navbar=()=>{
    return(
        <nav>
        <div className="nav-logo">
          <img src="./brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className="login">Login</button>
      </nav>
    );
}

export default Navbar;