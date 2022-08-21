import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Button } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";


function App() {
  const navigate=useNavigate()

  const[mode,setMode]=useState("light")
  
  const theme=createTheme({
    palette: {
      mode: mode,
    },
  })
  
  return (
    <ThemeProvider theme={theme}>
  <Paper style={{borderRadius: 0, minHeight: "100vh"}} elevation={24}>

    <div className="App">
      <div className="app-bar">
      <AppBar position="static">
  <Toolbar>
    <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
    <Button color="inherit" onClick={()=>navigate("/about")}>About</Button>
    <Button color="inherit" onClick={()=>navigate("/project")}>Project</Button>
    <Button color="inherit" onClick={()=>navigate("/skills")}>Skills</Button>
    <Button color="inherit" onClick={()=>navigate("/contact")}>Contact</Button>
    <Button
    startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    color="inherit" 
    onClick={()=>setMode(mode==="light"?"dark":"light")}>
      {mode==="light"?"dark":"light"} Mode
    </Button>
    </Toolbar>
    </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
