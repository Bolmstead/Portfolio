import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./FadeIn.css";

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

  freeBaySiteBtn: {
    textTransform: "none",
    marginTop: "15px",
    marginBottom: "5px",
    backgroundColor: "#FFC220",
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
    fontWeight: "1000",
    textDecoration: "none",
    color: "#FFC220",
  },
  marginTop: {
    marginTop: "8px",
  },
  joblyTitle: {
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
            <a id="Experience">
              <Typography variant="h4" component="h4" className={classes.title}>
                My Professional Experience
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
                      href="https://taxrise.com/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/taxrise-logo.png"
                        className={classes.projectLogoWittmeyer}
                        alt="taxrise"
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    I built several React components, Node/Python REST API
                    routes, and controller code to interact with Postgres and
                    MySQL Databases that support web applications currently used
                    by
                    <a
                      href="https://www.taxrise.net/"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      TaxRise{" "}
                    </a>
                    Employees and Clients. I taught myself how to develop on the
                    Salesfore Platform through Trailheads and tutorials and have
                    1 full year of professional Salesforce Development
                    experience.
                  </Typography>
                </Grid>
                <br />{" "}
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Created products such as: a Full-Stack SERN application that
                    enables TaxRise Tax Associates to view/add/edit/delete
                    financial records uploaded by our clients, Python backend
                    code and React UI that enables TaxRise staff to create
                    questions to dynamically appear on clients’ tax
                    questionnaires, and a Salesforce LWC UI and Apex code to
                    enable clients to add/edit/delete their claimed tax assets.
                  </Typography>
                </Grid>
                <br />{" "}
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.boldText}
                  >
                    Full Stack Technologies: {"  "}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {" "}
                    React, Node, Express, Python, Postgres, MySQL, FastAPI, CSS,
                    Ant Design, AWS, Bitbucket, Agile, Jira
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.boldText}
                  >
                    Salesforce Technologies: {"  "}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {" "}
                    Gearset, Apex, Apex Testing, LWCs, Aura Components, SOQL,
                    Flow Builder, Schema Design, Object Design
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={8}>
                      <a
                        href="https://taxrise.com/"
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
                href="https://taxrise.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/taxrise.png"
                  className={classes.websitePic}
                  alt="taxrise"
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
                      href="https://my-safetyauditprep-components.netlify.app/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/safety-audit-prep-logo.png"
                        className={classes.projectLogoWittmeyer}
                        alt=""
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    <a
                      href="https://www.safetyauditprep.net/"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      SafetyAuditPrep.com
                    </a>{" "}
                    is an online CRM site built to manage DOT regulations for
                    trucking companies. The site functions as a tool for
                    Employee & Fleet Management, Drug & Alcohol Consortium,
                    Compliance/Registration Management, and other utilities.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    As the Lead Full-Stack Developer on this project, I built
                    the manager's homepage dashboard, the UI and necessary
                    backend logic for managers to assign tractor/trailer units
                    to drivers, the functionality for managers to provide
                    privledges for employees and other functionalities. I also
                    integrated the following REST & SOAP APIs: &nbsp;
                    <a
                      href="https://www.questdiagnostics.com/business-solutions/hospitals-health-systems/enterprise-content-management/features-capabilities/systems-integrations"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Quest&nbsp;
                    </a>
                    (drug testing),&nbsp;
                    <a
                      href="https://tazworks.com/api/api-advanced/"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TazWorks&nbsp;
                    </a>
                    ,
                    <a
                      href="https://mobile.fmcsa.dot.gov/QCDevsite/docs/qcApi"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      FMCSA&nbsp;
                    </a>
                    , and{" "}
                    <a
                      href="https://developer.authorize.net/api/reference/index.html"
                      style={{ textDecoration: "none", fontWeight: 600 }}
                      className={classes.repoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Authorize.NET.
                    </a>{" "}
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
                    Design, Figma, AWS S3, REST & SOAP API Integration
                  </Typography>
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
                          Visit Site
                        </Button>
                      </a>

                      <a
                        href="https://my-safetyauditprep-components.netlify.app/"
                        className={classes.noTextDecoration}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={classes.freeBaySiteBtn}
                          style={{
                            backgroundColor: "#FFC220",
                            marginTop: "5px",
                          }}
                          fullWidth
                          variant="contained"
                          disableRipple
                        >
                          View My SafetyAuditPrep Work
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
                href="https://my-safetyauditprep-components.netlify.app/"
                className={classes.noTextDecoration}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/safety-audit-prep.png"
                  className={classes.websitePic}
                  alt=""
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
                      href="https://mock-dexscreener.netlify.app/"
                      className={classes.noTextDecoration}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="images/projectPics/dexScreenerTitle.png"
                        className={classes.projectLogoWittmeyer}
                        alt=""
                      />
                    </a>
                  </CardContent>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Mock DexScreener is a site that displays current
                    prices/information on cryptocurrency pairs. Users can search
                    for all types of tokens on most blockchains and see their
                    price and volume changes based on certain timeframes.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" component="p">
                    Utilized React, React-Bootstrap, Node.js, Express, and the
                    DexScreener API to retrieve the data. Planning to build upon
                    the application by adding User Authentication, saved
                    Favorites, and websockets to update crypto information
                    automatically.
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
                    Node.JS, Express, React, React-Bootstrap, Axios
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
                    href="https://github.com/Bolmstead/mock-dex-screener-frontend"
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
                    href="https://github.com/Bolmstead/mock-dex-screener-backend"
                    className={classes.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body2" component="p" display="inline">
                      {" "}
                      Back End
                    </Typography>
                  </a>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Grid item xs={8}>
                      <a
                        href="https://mock-dexscreener.netlify.app/"
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
                href="https://mock-dexscreener.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/projectPics/dexScreenerPage.png"
                  className={classes.websitePic}
                  alt=""
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
                        alt=""
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
                    Node.JS, Postgres, Node-PG, Express, React, Material-UI,
                    Axios, Python, Web-Scraping
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
                  alt=""
                />
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Grid>
  );
}
