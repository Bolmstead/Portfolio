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
import GetAppIcon from "@material-ui/icons/GetApp";
import Icon from "@material-ui/core/Icon";
import CardActionArea from "@material-ui/core/CardActionArea";

import FadeInSection from "./FadeInSection";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  skillContainer: {
    backgroundColor: "rgb(230, 230,230)",
    width: "100%",
    height: "100%",
  },
  card: {
    maxWidth: 250,
    minWidth: 250,
  },
  image: {
    height: 200,
    width: 200,
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "8px",
  },

  titleContainer: {
    marginTop: "0px",
    marginBottom: "0px",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  cardContainer: {},
  lineBreak: {
    backgroundColor: "lightgray",
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
  cardContent: {
    minHeight: "120px",
    textAlign: "center"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.skillContainer} justify="center">
      <a id="About">
        <Container maxWidth="md">
          <Grid container spacing={5} direction="row" alignItems="center" justify="center">
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography variant="h4" component="h4" className={classes.title}>
                My Skills
              </Typography>
            </Grid>

            <Grid
              item md={4} sm={6} xs={12}
              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/node.jpg"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Back End Development
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      blah blah
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item md={4} sm={6} xs={12}
              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/sql.jpg"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Database Development
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      blah blah
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4} sm={6} xs={12}              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/api.jpg"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      API Development
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      blah blah
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>


            <Grid
              item
              md={4} sm={6} xs={12}              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/frontend.jpg"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Frontend Development
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      blah blah
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>


            <Grid
              item
              md={4} sm={6} xs={12}              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/react-redux.png"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      React + Redux
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      blah blah
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4} sm={6} xs={12}              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/material-ui.png"
                      title="logo"
                    />
                  </div>
                  <CardContent className={classes.cardContent} alignItems="center" justify="center">
                  <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Front End Design
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      Front End Design
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>


          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
