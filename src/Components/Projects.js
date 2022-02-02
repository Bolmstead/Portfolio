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
  projectLogo: {
    maxWidth: "300px",
    minWidth: "200px",
  },
  projectLogoCheese: {
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
                    <img
                      src="images/projectPics/safety-audit-prep-logo.png"
                      className={classes.projectLogo}
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Safety Audit Prep, an online CRM site built for trucking
                    companies. Site functions as a tool for Employee & Fleet
                    Management, Drug & Alcohol Consortium and
                    Compliance/Registration Management. Site is currently in
                    Beta testing by our client's customers for 90 days before
                    the final product is released.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Working as a Senior Full-Stack Developer on this project
                    building the manager's homepage dashboard, the UI and
                    necessary backend logic for managers to assign
                    tractor/trailer units to drivers, functionality for managers
                    to provide privledges for employees, the entire
                    Authorize.NET & Quest external API integration, and other
                    functionality.
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
                    React, Redux, Node.JS, Express, Mongoose, Ant Design, Figma,
                    Axios, Authorize.Net & Quest API integration
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={8}>
                      <Button
                        className={classes.freeBaySiteBtn}
                        fullWidth
                        variant="contained"
                        disableRipple
                        disabled
                      >
                        Site in Beta
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <img
                src="images/projectPics/safety-audit-prep.png"
                className={classes.websitePic}
              />
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
                    >
                      <img
                        src="images/projectPics/freebay-logo.png"
                        className={classes.projectLogo}
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
              <a href="https://freebay.netlify.app/">
                <img
                  src="images/projectPics/freebay.png"
                  className={classes.websitePic}
                />
              </a>
            </Grid>
          </Hidden>
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
                      href="https://cardano-cheese.netlify.app"
                      className={classes.noTextDecoration}
                    >
                      <img
                        src="images/projectPics/full-cheese-title.jpg"
                        className={classes.projectLogoCheese}
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Cardano Cheese is a project of 100 unique Non-Fungible
                    Tokens (NFTs) on the Cardano cryptocurrency blockchain. All
                    cheese were purchased and randomly minted from the site by
                    integrating with the nft-maker.io API.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Visitors of the site can view all of the individually
                    designed NFTs and whether an NFT was minted. Links to the
                    Discord, Twitter, and other information is also available on
                    the site. Cardano Cheese has now been verified by CNFT.io.
                  </Typography>
                </Grid>
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
                    Node.JS, ReactJS, NFT API Tools (pro.nft-maker.io), HTML,
                    CSS, Material-UI, Axios
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
                  href="https://github.com/Bolmstead/Cardano-Cheese-Frontend"
                  className={classes.repoLink}
                >
                  <Typography variant="body2" component="p" display="inline">
                    {" "}
                    Front-End
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={8}>
                    <a
                      href="https://cardano-cheese.netlify.app"
                      className={classes.noTextDecoration}
                    >
                      <Button
                        className={classes.cheeseSiteBtn}
                        fullWidth
                        variant="contained"
                        disableRipple
                      >
                        Visit Site
                      </Button>
                    </a>
                    <a
                      href="https://opencnft.io/BV6pEJykjQi9RX34xRjjH9xdE"
                      className={classes.noTextDecoration}
                    >
                      <Button
                        className={classes.cheeseSiteBtn}
                        fullWidth
                        variant="contained"
                        disableRipple
                      >
                        View Sales Data
                      </Button>
                    </a>
                    <a
                      href="https://cnft.io/marketplace?project=Cardano%20Cheese"
                      className={classes.noTextDecoration}
                    >
                      <Button
                        className={classes.cheeseSiteBtn}
                        fullWidth
                        variant="contained"
                        disableRipple
                      >
                        Purchase on CNFT.io
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <a href="https://cardano-cheese.netlify.app/">
                <img
                  src="images/projectPics/cardano-cheese.jpg"
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
                      href="https://yoga-website.herokuapp.com/"
                      className={classes.noTextDecoration}
                    >
                      <img
                        src="images/projectPics/yoga-logo.png"
                        className={classes.projectLogo}
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    This Full-Stack website was created as a prototype for the
                    local yoga organization, Lunchtime Yoga for Professionals.
                    The site allows users to sign up for yoga classes through an
                    interactive Javascript calendar. Yoga instructors are
                    provided with a dashboard to create yoga classes and grab
                    all users contact information. Upon signing up for classes,
                    an email is sent to the user confirming signup, date, and
                    location of the class.
                  </Typography>
                </Grid>
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
                    Python, Javascript, JQuery, HTML, CSS, Bootstrap, Axios,
                    Jinja, Flask, Postgres, SQL Alchemy, Flask-Bcrypt, WTForms,
                    Font Awesome, Simple Calendar Source Code, SendGrid Email
                    API
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
                  href="https://github.com/Bolmstead/Yoga-for-Professionals"
                  className={classes.repoLink}
                >
                  <Typography variant="body2" component="p" display="inline">
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
                        className={classes.yogaSiteBtn}
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
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <a href="https://yoga-website.herokuapp.com/">
                <img
                  src="images/projectPics/yoga.png"
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
                    <Typography
                      variant="h3"
                      component="h3"
                      className={classes.title}
                    >
                      Jobly
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Jobly is a website that allows users to view fake companies
                    along with their job postings. Applications can be submitted
                    and are saved to a SQL database. Users can also utilize a
                    search bar which provides results as a user types.
                  </Typography>
                </Grid>
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
                    Node.JS, PostgreSQL, Express, JWT, JSON Schema, bcrypt,
                    ReactJS, HTML, CSS, Material-UI, React-Bootstrap, Axios
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
                  href="https://github.com/Bolmstead/jobly-front"
                  className={classes.repoLink}
                >
                  <Typography variant="body2" component="p" display="inline">
                    {" "}
                    Front-End
                  </Typography>
                </a>
                <Typography variant="body2" component="p" display="inline">
                  {" "}
                  /{" "}
                </Typography>
                <a
                  href="https://github.com/Bolmstead/jobly-back"
                  className={classes.repoLink}
                >
                  <Typography variant="body2" component="p" display="inline">
                    {" "}
                    Back-End
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={8}>
                    <a
                      href="https://jobly-front.netlify.app/"
                      className={classes.noTextDecoration}
                    >
                      <Button
                        className={classes.yogaSiteBtn}
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
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <a href="https://jobly-front.netlify.app/">
                <img
                  src="images/projectPics/jobly.png"
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
