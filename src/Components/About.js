import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import "./FadeIn.css";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100%",
    alignItems: "center",
    minHeight: "80vh",
    paddingTop: "120px",
  },
  noTextDecoration: {
    textDecoration: "none",
  },
  aboutTitle: {
    marginTop: "0px",
    marginBottom: "0px",
  },
  aboutMeTextContainer: {},
  homeButton: {
    background: "rgb(100, 100 ,100, 0.5)",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "0px",
  },
  safetyAuditPrepBtn: {
    textTransform: "none",
    marginTop: "15px",
    marginBottom: "5px",
  },
  homeButtonLink: {
    textTransform: "none",
  },
  resumeButton: {
    textTransform: "none",

    backgroundColor: "#FFC220",
  },
  link: {
    textTransform: "none",
    textDecoration: "none",
    color: "orange",
    fontWeight: "bold",
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
    maxHeight: "400px",
    maxWidth: "270px",
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
  },
  icon: {
    marginRight: "25px",
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      marginRight: "15px",
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  contactLink: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.aboutContainer} justify="center">
      <Container
        maxWidth="md"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            className={classes.headshotContainer}
            alignItems="center"
            justify="center"
          >
            {" "}
            <img
              src="images/headshot.jpg"
              className={classes.headshotPic}
            ></img>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            className={classes.aboutMeTextContainer}
            alignItems="center"
            justify="center"
          >
            <Card
              className={classes.aboutCardContainer}
              alignItems="center"
              justify="center"
            >
              <CardContent>
                <Typography variant="h4" component="h4">
                  Who am I?
                </Typography>
                <Typography variant="body2" component="p">
                  A Senior Full-Stack Software Engineer with 3 years experience
                  building Frontend components, API's, and Database Architecture
                  for SaaS web applications. I have worked professionally since
                  2020 and graduated from the Springboard software engineering
                  program. I have 4 years professional experience in individual
                  & business income tax research and have passed all 4 sections
                  of the CPA exam.
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  I sincerely enjoy my work and collaborating with teams in a
                  professional, supportive environment. When I'm not coding, I
                  like to play tennis, snowboard, and make decent attempts at
                  golf. Thank you for viewing my portfolio site! Click{" "}
                  <a
                    href="https://my-safetyauditprep-components.netlify.app/"
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  to view my professional work.
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
                    <Typography variant="body2" component="p" display="inline">
                      {" "}
                      Boise, Idaho
                    </Typography>
                    <br />
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

                  <Grid item xs={6} className={classes.iconContainer}>
                    <a
                      href="https://www.linkedin.com/in/berkleyolmstead/"
                      className={classes.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className={classes.icon} />
                    </a>
                    <a
                      href="https://github.com/Bolmstead"
                      className={classes.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className={classes.icon} />
                    </a>

                    <a href="tel:208-871-3882" className={classes.contactLink}>
                      <PhoneIcon className={classes.icon} />
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container alignItems="center" justify="center">
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <a href="resume.pdf" download className={classes.link}>
                      <Button
                        variant="contained"
                        className={classes.resumeButton}
                        startIcon={<GetAppIcon />}
                        style={{ width: "200px", marginBottom: "10px" }}
                      >
                        Download Resume
                      </Button>
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <a
                      href="https://my-safetyauditprep-components.netlify.app/"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className={classes.resumeButton}
                        variant="contained"
                        disableRipple
                        style={{ width: "200px", marginBottom: "10px" }}
                      >
                        View My Work!
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
