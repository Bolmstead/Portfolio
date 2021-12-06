import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import "./FadeIn.css";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  skillContainer: {
    backgroundColor: "rgb(230, 230,230)",
    width: "100%",
    paddingBottom: "80px",
    paddingTop: "30px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "130px",
    },
  },
  card: {
    maxWidth: "100%",
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
    textAlign: "center",
  },
  skillCaption: {
    color: "gray",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.skillContainer} justify="center">
      <a id="Skills">
        <Container maxWidth="md">
          <Grid
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography variant="h4" component="h4" className={classes.title}>
                My Skills
              </Typography>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
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
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Back End Development
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      I develop and maintain Back-End logic using a variety
                      of technologies such as Node.JS, Express, Python, and
                      Flask. My back end work using these technologies can be
                      seen in the Projects section.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
              className={classes.cardContainer}
              alignItems="center"
              justify="center"
            >
              <Card className={classes.card} variant="outlined">
                <CardActionArea>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src="images/skillPics/sql_mongodb.png"
                      title="logo"
                    />
                  </div>
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      DB Architecture Creation
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      I am well versed in SQL and MongoDB database development
                      and refactoring. I enjoy using technologies that interact
                      with these databases such as Mongoose, Node-PostgreSQL,
                      SQL Alchemy, and Sequelize.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
              className={classes.cardContainer}
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
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      API Development
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      I create API routes and models allowing users to create,
                      retrieve, update, and delete stored data. I also develop code to
                      communicate with external APIs through various
                      technologies such as Axios.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
              className={classes.cardContainer}
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
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Frontend Development
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      I use HTML, CSS, and Javascript to build attractive
                      responsive website frontends. This work can be seen in the
                      Projects section below.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
              className={classes.cardContainer}
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
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      React + Redux
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      Frameworks supporting state management are essential to
                      building dynamic, interactive apps. I have strong
                      experience with React as well as the state container,
                      Redux.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid
              item
              md={4}
              sm={6}
              xs={8}
              className={classes.cardContainer}
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
                  <CardContent
                    className={classes.cardContent}
                    alignItems="center"
                    justify="center"
                  >
                    <Typography
                      variant="h6"
                      color="body2"
                      component="p"
                      fontWeight="fontWeightBold"
                    >
                      Front End Design
                    </Typography>
                    <Typography
                      variant="caption"
                      className={classes.skillCaption}
                    >
                      The look and feel of applications are important in every
                      project. I understand and utilize many CSS frameworks such
                      as Material UI, Ant Design, and Bootstrap.
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
