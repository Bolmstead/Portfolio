import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./FadeIn.css";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    backgroundColor: `white`,
    width: "100%",
    paddingBottom: "50px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px",
    },
  },
  titleContainer: {
    marginTop: "0px",
    marginBottom: "0px",
    paddingBottom: "0px",
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
    paddingTop: "0px",
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
  projectLogoWittmeyer: {
    maxWidth: "300px",
    minWidth: "200px",
  },
  projectLogoWittmeyerWittmeyer: {
    maxWidth: "350px",
    minWidth: "200px",
  },
  projectLogoWittmeyerCheese: {
    maxWidth: "400px",
    minWidth: "300px",
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
  freeBaySiteBtn: {
    textTransform: "none",
    marginTop: "15px",
    marginBottom: "5px",
  },

  yogaSiteBtn: {
    textTransform: "none",
    marginTop: "30px",
    marginBottom: "5px",
  },

  cheeseSiteBtn: {
    textTransform: "none",
    marginTop: "10px",
    marginBottom: "5px",
  },

  repoLink: {
    fontWeight: "Bold",
    textDecoration: "none",
    color: "orange",
  },
  marginTop: {
    marginTop: "8px",
  },
  joblyTitle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    paddingTop: "0px",
    textDecoration: "none",
    color: "black",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.projectsContainer} justify="center">
      <Container maxWidth="md">
        <Grid
          container
          spacing={8}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} className={classes.titleContainer}>
            <a id="Projects">
              <Typography variant="h4" component="h4" className={classes.title}>
                My Projects
              </Typography>
            </a>
          </Grid>

          <Grid
            item
            xs={11}
            sm={9}
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardContent className={classes.logoContainer}>
                    <a
                      href="https://www.safetyauditprep.net/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/safety-audit-prep-logo.png"
                        className={classes.projectLogoWittmeyer}
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Safety Audit Prep is an online CRM site built for trucking
                    companies. The web application functions as a tool for
                    Employee & Fleet Management, Drug & Alcohol Consortium and
                    Compliance/Registration Management. This site is currently
                    in Beta testing for our client's customers for 90 days
                    before the final product is released.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Working as a Senior Full-Stack Developer on this project, I
                    built the manager's homepage dashboard, the UI and necessary
                    backend logic for managers to assign tractor/trailer units
                    to drivers, the functionality for managers to provide
                    privledges for employees, the entire Authorize.NET & Quest
                    external API integration, and other functionalities.
                  </Typography>
                </Grid>
                <br />{" "}
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
                    React, Redux, Node.JS, Express, Mongoose, MongoDB, Ant
                    Design, Figma, Axios, REST & SOAP API Integration
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
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: "#677787" }}
                    display="inline"
                  >
                    <a
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Private
                    </a>
                  </Typography>{" "}
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={8}>
                      <a
                        href="https://www.safetyauditprep.net/"
                        className={classes.noTextDecoration}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={classes.freeBaySiteBtn}
                          fullWidth
                          variant="contained"
                          disableRipple
                        >
                          Visit Beta Site
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <a
                href="https://www.safetyauditprep.net/"
                className={classes.noTextDecoration}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/safety-audit-prep.png"
                  className={classes.websitePic}
                />
              </a>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={11}
            sm={9}
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardContent className={classes.logoContainer}>
                    <a
                      href="https://freebay.netlify.app/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/freebay-logo.png"
                        className={classes.projectLogoWittmeyer}
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    FreeBay is a fake product bidding site that allows users to
                    bid on fake products. Users can search and browse for fake
                    products that are up for auction and compete with other
                    users by placing bids. Each user can view other bidder's
                    profiles to view the products they have won or have the
                    highest bid on.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Product data was web scraped from varioius Amazon product
                    sites using Python then hosted in an API I created. This API
                    utilizes search query functionality to find products,
                    supplies a JSON web token upon user validation, and provides
                    most recent wins/products.
                  </Typography>
                </Grid>
                <br />{" "}
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body2" component="p" display="inline">
                      {" "}
                      Front End
                    </Typography>
                  </a>
                  <Typography variant="body2" component="p" display="inline">
                    {" "}
                    /{" "}
                  </Typography>
                  <a
                    href="https://github.com/Bolmstead/Freebay-API"
                    className={classes.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body2" component="p" display="inline">
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
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={classes.freeBaySiteBtn}
                          fullWidth
                          variant="contained"
                          disableRipple
                        >
                          Visit Site
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <a
                href="https://freebay.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/freebay.png"
                  className={classes.websitePic}
                />
              </a>
            </Grid>
          </Hidden>


          <Grid
            item
            xs={11}
            sm={9}
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardContent className={classes.logoContainer}>
                    <a
                      href="https://freebay.netlify.app/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/wittmeyer-logo.png"
                        className={classes.projectLogoWittmeyer}
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    I built the website for the Wittmeyer and Associates, LLC
                    lobbying firm using React. Website provides information
                    about the services they offer and built based on the design
                    requested from the client.
                  </Typography>
                </Grid>
                <br />{" "}
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Site utilizes the EmailJS API allowing for potential clients
                    to contact my client by using the form on the site
                    (currently inactive). Site is fully mobile responsive.
                  </Typography>
                </Grid>
                <br />{" "}
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
                      href="https://github.com/Bolmstead/murph-lobby"
                      className={classes.repoLink}
                      target="_blank"
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
                          href="https://wittmeyerandassociates.com/"
                          className={classes.noTextDecoration}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={classes.freeBaySiteBtn}
                          fullWidth
                          variant="contained"
                          disableRipple
                        >
                          Visit Site
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Hidden smDown>
            <Grid item md={6}>
              <a
                href="https://wittmeyerandassociates.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/wittmeyer.png"
                  className={classes.websitePic}
                />
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Grid>
  );
}
