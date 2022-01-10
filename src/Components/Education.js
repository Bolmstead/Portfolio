import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import "./FadeIn.css";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: "rgb(125, 125 ,125)",
    width: "100%",
    paddingBottom: "60px",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px",
    },
  },
  titleContainer: {
    marginTop: "0px",
    marginBottom: "30px",
    color: "white",
  },
  springboardSection: {
    order: 2,
  },
  cpaSection: {
    order: 3,

    [theme.breakpoints.down(`sm`)]: {
      order: 4,
    },
  },
  vandalSection: {
    order: 6,
  },
  ghanaSection: {
    order: 7,

    [theme.breakpoints.down(`sm`)]: {
      order: 8,
    },
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
  springboardLogoContainer: {
    textAlign: "center",
    order: 1,
  },
  cpaLogoContainer: {
    textAlign: "center",
    order: 4,

    [theme.breakpoints.down(`sm`)]: {
      order: 3,
    },
  },
  vandalLogoContainer: {
    textAlign: "center",
    order: 5,
  },
  ghanaLogoContainer: {
    textAlign: "center",
    order: 8,

    [theme.breakpoints.down(`sm`)]: {
      order: 7,
    },
  },
  springboardLogo: {
    width: "175px",
  },
  cpaLogo: {
    width: "250px",
  },
  vandalLogo: {
    width: "125px",
  },
  ghanaLogo: {
    width: "250px",
  },
  educationCard: {
    border: "none",
    boxShadow: "none",
  },
  cpaTextContainer: {
    border: "none",
    boxShadow: "none",
    textAlign: "center",
    justifyContent: "center",
  },
  cpaCard: {
    border: "none",
    boxShadow: "none",
    textAlign: "center",
  },
  cardContent: {
    height: "100px",
  },
  cpaText: {
    color: "white",
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
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.aboutContainer} justify="center">
      <a id="Education">
        <Container maxWidth="md">
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography variant="h4" component="h4" className={classes.title}>
                My Education
              </Typography>
            </Grid>

            <Grid
              item
              xs={8}
              sm={6}
              md={4}
              className={classes.springboardLogoContainer}
              alignItems="center"
              justify="center"
            >
              <img
                src="images/education/springboard.png"
                className={classes.springboardLogo}
              ></img>
            </Grid>

            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              className={classes.springboardSection}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.educationCard}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h5" style={{marginTop: "25px"}}>
                    Springboard Software Engineering Program
                  </Typography>
                  <Typography className={classes.title} color="textSecondary">
                    Certificate of Completion (April 2021)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              className={classes.cpaSection}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.educationCard}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h5" style={{marginTop: "25px"}}>
                    Passed all 4 sections of the CPA exam
                  </Typography>
                  <Typography className={classes.title} color="textSecondary">
                    * Not currently an active CPA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={8}
              sm={6}
              md={4}
              className={classes.cpaLogoContainer}
              alignItems="center"
              justify="center"
            >
              {" "}
              <img
                src="images/education/cpa.png"
                className={classes.cpaLogo}
              ></img>
            </Grid>

            <Grid
              item
              xs={8}
              sm={6}
              md={4}
              className={classes.vandalLogoContainer}
              alignItems="center"
              justify="center"
            >
              <img
                src="images/education/uofi.png"
                className={classes.vandalLogo}
              ></img>
            </Grid>

            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              className={classes.vandalSection}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.educationCard}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2"></Typography>
                  <Typography variant="h5" component="h5">
                    University of Idaho (B.S. in Business)
                  </Typography>
                  <Typography className={classes.title} color="textSecondary">
                    Degrees in Accounting (Mar 2012) & Finance (Dec 2012)
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
                        GPA: {"  "}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                      >
                        {" "}
                        3.45
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                        className={classes.boldText}
                      >
                        Location: {"  "}
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
                          Moscow, Idaho
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              className={classes.ghanaSection}
              alignItems="center"
              justify="center"
            >
              <Card
                className={classes.educationCard}
                alignItems="center"
                justify="center"
              >
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2"></Typography>
                  <Typography variant="h5" component="h5">
                    University of Ghana
                  </Typography>
                  <Typography className={classes.title} color="textSecondary">
                    Study abroad semester (Spring 2010)
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
                        GPA: {"  "}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                      >
                        {" "}
                        3.87
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        component="p"
                        display="inline"
                        className={classes.boldText}
                      >
                        Location: {"  "}
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
                          Accra, Ghana, Africa
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={8}
              sm={6}
              md={4}
              className={classes.ghanaLogoContainer}
              alignItems="center"
              justify="center"
            >
              {" "}
              <img
                src="images/education/ghana.png"
                className={classes.ghanaLogo}
              ></img>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
