import React from "react";
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
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";


const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100%",
    paddingBottom: "60px",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: "130px",
      paddingBottom: "190px",
    },
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
    width: "270px",
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
  },
  iconContainer: {},
  contactLink: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.aboutContainer} justify="center">
      <a id="About">
        <Container maxWidth="md">
          <Grid
            container
            spacing={5}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} className={classes.aboutTitle}>
              <Typography variant="h4" component="h4" className={classes.title}>
                About me
              </Typography>
            </Grid>

            <Grid
              item
              xs={8}
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
              xs={11}
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
                    I am a Software Developer based in the United States with 4
                    years of professional experience in Tax and Accounting. I
                    decided to transition my career to software engineering
                    after enjoying the process of creating a few apps
                    with Javascript. In April 2021, I graduated from the
                    Springboard Software Engineering program where I built upon
                    my skills developing full-stack web applications, SQL
                    databases, and REST API’s.
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    I understand how to collaborate in a professional
                    environment and enjoy working in teams. Building and
                    maintaining relationships is something I value and believe
                    is necessary in a professional environment. When I'm not
                    coding, I like to play tennis, snowboard, and make decent
                    attempts at golf.
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
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <a href="resume.pdf" download className={classes.link}>
                        <Button
                          variant="contained"
                          className={classes.resumeButton}
                          startIcon={<GetAppIcon />}
                        >
                          Download Resume
                        </Button>
                      </a>
                    </Grid>
                    <Grid item xs={6} className={classes.iconContainer}>
                      <a
                        href="https://www.linkedin.com/in/berkleyolmstead/"
                        className={classes.contactLink}
                      >
                        <LinkedInIcon className={classes.icon} />
                      </a>
                      <a
                        href="https://github.com/Bolmstead"
                        className={classes.contactLink}
                      >
                        <GitHubIcon className={classes.icon} />
                      </a>
                      <a
                        href="tel:208-871-3882"
                        className={classes.contactLink}
                      >
                        <PhoneIcon className={classes.icon} />
                      </a>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
