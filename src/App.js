import "./App.css";
import React, { useState, useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import NavigationBarMobile from "./Components/NavigationBarMobile";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";


import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CssBaseline from "@material-ui/core/CssBaseline";
import Fade from "@material-ui/core/Fade";

import { makeStyles } from "@material-ui/core/styles";
import Routes from "./Routes.js";

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
  },
  remainingApp: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  const [fadedIn, setFadedIn] = React.useState(false);

  // call API to grab products based on search results
  useEffect(() => {
    async function fadeInHomeScreen() {
      setFadedIn((prev) => !prev);
    }
    fadeInHomeScreen();
  }, []);
  return (

    <Fade in={fadedIn} {...(fadedIn ? { timeout: 1000 } : {})}>
      <div className={classes.app}>
        <NavigationBar />
        <div className={classes.remainingApp}>
        <NavigationBarMobile />

          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </Fade>
  );
}

export default App;
