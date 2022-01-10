import "./App.css";
import React, { useEffect } from "react";
import NavigationBar from "./Components/NavigationBar";
import NavigationBarMobile from "./Components/NavigationBarMobile";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";


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
          <Skills />
          <Projects />
          <Education />

          <Contact />
        </div>
      </div>
    </Fade>
  );
}

export default App;
