import "../App.css";
import React, { useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";

import MyComponentsHome from "../Components/MyComponentsHome";

import { makeStyles } from "@material-ui/core/styles";
import "../index.css";

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
  },
  remainingApp: {
    width: "100%",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <NavigationBar />
      <div className={classes.remainingApp}>
        <MyComponentsHome />
      </div>
    </div>
  );
}

export default Main;
