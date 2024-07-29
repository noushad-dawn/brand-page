import React from "react";
import './style.css'
import Navbar from "./Nav-bar";
import Main from "./Main"

const App = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Main/>
      </div>
    </>
  );
}

export default App;