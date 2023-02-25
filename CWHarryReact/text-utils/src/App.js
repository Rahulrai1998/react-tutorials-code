import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Toasts from "./components/Toasts";
import About from "./components/About";
import React, { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText , setToggleText] = useState("Enable Dark Mode")
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#212529"
      setToggleText("Disable Dark Mode")

    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      setToggleText("Enable Dark Mode")
    }
     
  }

  return (
    <>
      <Navbar title="Text Utils" about="About us" mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
      <div className="container my-4">
        <TextForm formHeading="Enter Text" mode={mode} toggleMode={toggleMode}/>
      </div>
      <About mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
