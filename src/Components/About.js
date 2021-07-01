import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./FadeIn.css";
import GetAppIcon from '@material-ui/icons/GetApp';
import Icon from '@material-ui/core/Icon';

import FadeInSection from "./FadeInSection";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100%",
    height: "100%"
  },
  aboutTitle: {
    marginTop: "0px",
    marginBottom: "0px"
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonLink: {
    textTransform: "none",
  },
  resumeButton: {
    textTransform: "none",

    backgroundColor: "#FFC220"


  },
  link: {
    textTransform: "none",
    textDecoration: "none",


  },
  root: {
    minWidth: 275,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#FFC220",

  },
  businessPhoto: {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(/images/business.jpg)`,
    height: "100vh",
  },
  businessPhotoMobile: {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(/images/business.jpg)`,
    height: "300px",
  },
  aboutCard: {
    backgroundColor: "white",
    borderRadius: "0px",
  },
  headshotContainer: {},
  headshotPic: {
    width: "100%",
    padding: "2px",
    border: "1px solid lightgray",
    
  },
  aboutCardContainer: {
    border: "none",
    boxShadow: "none",

  },
  lineBreak: {
    backgroundColor: "#ECECEC",
    height: "1px",
    borderWidth: 0,
    color: "gray",
    marginTop: "10px",
    marginBottom: "10px",
  },
  boldText: {
    fontWeight: "bold",
  },
  noTextTransform: {
    textTransform: "none",
  },
  title: {

    fontWeight: "bold",

  },
  emailLink: {
    color: "#212121",
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.aboutContainer} justify="center">
      <a id="About">
        <Container maxWidth="md">
          <Grid container spacing={5} direction="row" alignItems="center" justify="center">
            <Grid item xs={12} className={classes.aboutTitle}>
              <Typography variant="h4" component="h4" className={classes.title}>
                About me
              </Typography>
            </Grid>

            <Grid item xs={8} sm={6} md={4}className={classes.headshotContainer} alignItems="center" justify="center">
              {" "}
              <img
                src="images/headshot.jpg"
                className={classes.headshotPic}
              ></img>
            </Grid>

            <Grid item xs={12} md={8} className={classes.aboutMeTextContainer} alignItems="center" justify="center">
              <Card className={classes.aboutCardContainer} alignItems="center" justify="center">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Who am I?
                  </Typography>
                  <Typography variant="h5" component="h2"></Typography>
                  <Typography variant="h5" component="h5">
                    Berkley Olmstead, Full-Stack Developer
                  </Typography>
                  <Typography variant="body2" component="p">
                    I am a devoted software developer based in the United States
                    with 4 years of professional experience in Tax and Accounting. I
                    recently graduated from the Springboard Software Engineering
                    program and have a strong technical acumen in developing
                    full-stack web applications, SQL databases, and REST API’s.
                  </Typography>
                  <hr className={classes.lineBreak} />
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                        className={classes.boldText}
                      >
                        From: {"  "}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                      >
                        {" "}
                        Boise, Idaho
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                        className={classes.boldText}
                      >
                        Email: {"  "}
                      </Typography>
                      <a
                href="mailto:olms2074@gmail.com"
                className={classes.link}
              >
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                        className={classes.emailLink}
                      >
                        {" "}
                        olms2074@gmail.com
                      </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <a href="resume.pdf" download className={classes.link}>
                    <Button
                      variant="contained"
                      className={classes.resumeButton}
                      startIcon={<GetAppIcon />}
                      >
                      Download Resume
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
