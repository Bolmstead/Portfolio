import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FadeInSection from "./FadeInSection";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./FadeIn.css";

const useStyles = makeStyles(() => ({
  homeContainer: {
    background: "rgb(50, 50 ,50)",
    width: "100%",
    backgroundSize: "cover",
  },
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "0px",
  },
  homeButtonLink: {
    textDecoration: "none",
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontFamily: "Roboto",
    marginTop: "50px",
    fontWeight: 500,
    color: "white",
  },
  businessPhoto: {
    minWidth: "50px",
    maxWidth: "400px",
  },
  titleContainer: {},

  pressCard: {
    filter: "drop-shadow(3px 3px 3px #222222)",
  },
  pressImage: {
    width: "300px",
    filter: "drop-shadow(3px 3px 3px #222222)",
  },
  cardTitle: {
    marginTop: "105px",
    color: "white",
    fontSize: "19px",
  },
  articleTitle: {
    color: "white",
  },
  icon: {
    color: "white",
    marginBottom: "40px",
  },
}));

export default function Specializations() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <a id="press">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Grid
            item
            xs={12}
            align="center"
            justify="center"
            className={classes.titleContainer}
          >
            <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.title}
            >
              PRESS
            </Typography>
          </Grid>
          <Grid item>
            
              <Container maxWidth="md">
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justify="center"
                  direction="row"
                >
                  <Grid item xs={12} align="center" justify="center">
                    <Typography
                      m={12}
                      variant="h6"
                      component="h6"
                      className={classes.articleTitle}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet consectetur. "
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    sm={12}
                    align="center"
                    justify="center"
                    className={classes.pressCard}
                  >
                    <img
                      align="center"
                      justify="center"
                      src="/images/capital_press.png"
                      className={classes.pressImage}
                    ></img>
                  </Grid>
                  <Grid item xs={12} align="center" justify="center">
                    <ArrowBackIosIcon className={classes.icon} />
                    <ArrowForwardIosIcon className={classes.icon} />
                  </Grid>
                </Grid>
              </Container>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
}
