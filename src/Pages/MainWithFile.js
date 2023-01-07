import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import "../App.css";
import AndroRat from "../Components/AndroRat";
import Home from "../Components/Home";
import NavigationBar from "../Components/NavigationBar";

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
          <AndroRat />
        </div>
      </div>
    </Fade>
  );
}

export default MainWithFile;
