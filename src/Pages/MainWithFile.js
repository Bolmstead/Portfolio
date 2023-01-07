import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import "../App.css";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Home from "../Components/Home";
import NavigationBar from "../Components/NavigationBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import "../index.css";

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
  },
  remainingApp: {
    width: "100%",
  },
}));

function MainWithFile() {
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
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />

          <Contact />
        </div>
      </div>
    </Fade>
  );
}

export default MainWithFile;
