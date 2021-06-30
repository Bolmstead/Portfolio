import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./FadeIn.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import Icon from "@material-ui/core/Icon";

import FadeInSection from "./FadeInSection";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    backgroundColor: `white`,
    width: "100%",
    paddingBottom: "50px"
  },
  titleContainer: {
    marginTop: "0px",
    marginBottom: "0px",
    paddingBottom: "0px"
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
  root: {
    minWidth: 275,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    paddingTop: "0px"
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
  projectsCard: {
    backgroundColor: "white",
    borderRadius: "0px",
  },
  projectLogo: {
    maxWidth: "300px",
    minWidth: "200px",
  },
  websitePic: {
    height: "600px",
    boxShadow: "0px 0px 20px gray",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "0px",
    padding: "0px",
  },
  projectsCardContainer: {
    border: "none",
    boxShadow: "none",
    backgroundColor: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  noTextDecoration: {
    textDecoration: "none",
  },
  title: {
    fontWeight: "bold",
  },
  liveSiteButton: {
    textTransform: "none",
    marginTop: "15px",
  },

  repoLink: {
    fontWeight: "Bold",
    textDecoration: "none",
    color: "orange"
  },
  marginTop: {
    marginTop: "8px"
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.projectsContainer} justify="center">
      <a id="projects">
        <Container maxWidth="md">
          <Grid container spacing={8} direction="row" alignItems="center">
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography variant="h4" component="h4" className={classes.title}>
                Projects
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className={classes.projectsMeTextContainer}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.projectsCardContainer}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.logoContainer}>
                  <a
                    href="https://freebay.netlify.app/"
                    className={classes.noTextDecoration}
                  >
                    <img
                      src="images/projectPics/freebay-logo.png"
                      className={classes.projectLogo}
                    />
                  </a>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" component="p">
                    FreeBay is a fake product bidding site that allows users to
                    bid on fake products. Users can search and browse for fake
                    products that are up for auction and compete with other
                    users by placing bids. Each user can view other bidder's
                    profiles to view the products they have won or have the
                    highest bid on. Product data was web scraped from varioius
                    Amazon product sites using Python then hosted in an API I
                    created. This API utilizes search query functionality to
                    find products, supplies a JSON web token upon user
                    validation, and provides most recent wins/products.
                  </Typography>
                  <br />{" "}
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.boldText}
                      >
                        Technologies: {"  "}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {" "}
                        Node.JS, Node-PostgreSQL, Express, React, HTML, CSS,
                        Material-UI, Axios, bcrypt, Python
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.boldText}
                      >
                        Repositories: {"  "}
                      </Typography>
                      <a
                        href="https://github.com/Bolmstead/Freebay"
                        className={classes.repoLink}
                      >
                        <Typography
                          variant="body2"
                          component="p"
                          display="inline"
                        >
                          {" "}
                          Front End
                        </Typography>
                      </a>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                      >
                        {" "}
                        /{" "}
                      </Typography>
                      <a
                        href="https://github.com/Bolmstead/Freebay-API"
                        className={classes.repoLink}
                      >
                        <Typography
                          variant="body2"
                          component="p"
                          display="inline"
                        >
                          {" "}
                          API & Back End
                        </Typography>
                      </a>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container justify="center">
                        <Grid item xs={8}>
                          <a
                            href="https://freebay.netlify.app/"
                            className={classes.noTextDecoration}
                          >
                            <Button
                              className={classes.liveSiteButton}
                              fullWidth
                              variant="contained"
                            >
                              Visit Site
                            </Button>
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <a
                href="https://freebay.netlify.app/"
              >
                <img
                  src="images/projectPics/freebay.png"
                  className={classes.websitePic}
                />
              </a>
            </Grid>
{/* 
            <Grid
              item
              xs={12}
              md={6}
              className={classes.projectsMeTextContainer}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.projectsCardContainer}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.logoContainer}>
                <a
                href="https://github.com/Bolmstead"
                className={classes.noTextDecoration}
              >
                  <img
                    src="images/projectPics/wittmeyer-logo.png"
                    className={classes.projectLogo}
                  />
                  </a>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" component="p">
                    I am devoted software developer based in the United States
                    with professional experience in Tax and Accounting. I have
                    recently graduated from the Springboard Software Engineering
                    program and have a strong technical acumen in developing
                    full-stack web applications, SQL databases, and REST API’s.
                  </Typography>
                  <br />{" "}
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.boldText}
                      >
                        Technologies: {"  "}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {" "}
                        React, HTML, CSS, Material-UI
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.boldText}
                      >
                        Repositories: {"  "}
                      </Typography>
                      <a
                        href="https://github.com/Bolmstead"
                        className={classes.repoLink}
                      >
                        <Typography
                          variant="body2"
                          component="p"
                          display="inline"
                        >
                          {" "}
                          Front End
                        </Typography>
                      </a>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container justify="center">
                        <Grid item xs={8}>
                          <a
                            href="https://github.com/Bolmstead"
                            className={classes.noTextDecoration}
                          >
                            <Button
                              className={classes.liveSiteButton}
                              fullWidth
                              variant="contained"
                            >
                              Visit Site
                            </Button>
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

              <Grid item xs={12} md={6}>
              <a
                href="https://github.com/Bolmstead"
              >
                <img
                  src="images/projectPics/wittmeyer.png"
                  className={classes.websitePic}
                />
                </a>
              </Grid> */}

            <Grid
              item
              xs={12}
              md={6}
              className={classes.projectsMeTextContainer}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.projectsCardContainer}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.logoContainer}>
                  <a
                    href="https://yoga-website.herokuapp.com/"
                    className={classes.noTextDecoration}
                  >
                    <img
                      src="images/projectPics/yoga-logo.png"
                      className={classes.projectLogo}
                    />
                  </a>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" component="p">
                    This project is a prototype website for the local yoga organization, Lunchtime Yoga for Professionals. The site allows users to sign up for yoga classes through an interactive Javascript calendar. Yoga instructors are provided with a dashboard to create yoga classes and grab all users contact information. Upon signing up for classes, an email is sent to the user confirming signup, date, and location of the class.
                  </Typography>
                  <br />{" "}
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.boldText}
                      >
                        Technologies: {"  "}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {" "}
                        Python, Flask, SQL Alchemy, JS, JQuery, Jinja, WTForms,
                        HTML, CSS, Bootstrap, Axios, SendGrid API
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.marginTop}>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.boldText}
                    >
                      Repositories: {"  "}
                    </Typography>
                    <a
                      href="https://github.com/Bolmstead"
                      className={classes.repoLink}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                      >
                        {" "}
                        Full-Stack
                      </Typography>
                    </a>

                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <Grid item xs={8}>
                        <a
                          href="https://yoga-website.herokuapp.com/"
                          className={classes.noTextDecoration}
                        >
                          <Button
                            className={classes.liveSiteButton}
                            fullWidth
                            variant="contained"
                          >
                            Visit Site
                          </Button>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
            <a
                href="https://yoga-website.herokuapp.com/"
              >
              <img
                src="images/projectPics/yoga.png"
                className={classes.websitePic}
              />
              </a>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
