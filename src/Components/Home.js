import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Hidden from "@material-ui/core/Hidden";
import MailIcon from "@material-ui/icons/Mail";


const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(/images/home2.jpg)`,
    width: "100%",
    height: "103vh",
    backgroundSize: "cover",
  },
  overlay: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    background: "rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    marginBottom: "175px",
    padding: "0px",
  },
  buttonContainerMobile: {
    marginBottom: "175px",
    padding: "0px",
    marginTop: "60px"
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "250px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonMobile: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "250px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonLink: {
    textDecoration: "none",
  },
  firstName: {
    fontWeight: "bold",
    color: "white"
  },
  lastName: {
    fontWeight: "bold",
    color: "#FFC220"
  },
  caption: {
    fontWeight: "bold",
    color: "white"
  },
  logo: {
    marginTop: "180px",
    marginBottom: "0px",
    minWidth: "50px",
    maxWidth: "800px",
    width: "100%",
    height: "auto",
  },
  icon: {
    fontSize: 50,
    color: "white"
  },
  contact: {
    fontFamily: "Roboto",
    color: "white"
  },
  contactLink: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Home() {
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
    <Grid item xs={12} className={classes.homeContainer}>
      <a id="Home">
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        className={classes.overlay}
      >
        <Grid item xs={12} align="center" justify="center">
          <Container maxWidth="md" align="center" justify="center" className={classes.container}>
            <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.firstName}
              display="inline"
            >
              Berkley{" "}
            </Typography>
            <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.lastName}
              display="inline"
            >
               Olmstead
            </Typography>
            <Typography
              m={12}
              variant="h6"
              component="h6"
              className={classes.caption}
            >
              I'm a Full-Stack Developer
            </Typography>
          </Container>
        </Grid>       
      </Grid>
      </a>
    </Grid>
  );
}
