import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import "./FadeIn.css";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    backgroundColor: `#FCFCFC`,
    width: "100%",
    alignItems: "center",
    minHeight: "80vh",
    paddingTop: "120px",
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
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  contactLink: {
    textDecoration: "none",
    color: "black",
  },
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
    display: "inline",
    objectFit: "contain",
  },

  titleContainer: {
    marginTop: "0px",
    marginBottom: "0px",
    paddingBottom: "5px",
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
    display: "flex",
    alignItems: "center",
  },
  cardContent: {
    minHeight: "120px",
  },
  skillCaption: {
    color: "gray",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.aboutContainer} justify="center">
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
              My&nbsp;
              <a
                href="https://www.safetyauditprep.net/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.title}
              >
                <img
                  style={{ width: 400 }}
                  src="images/myComponents/safety-audit-prep-text.jpeg"
                ></img>
              </a>
              &nbsp;Components
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.titleContainer}>
            <Typography variant="body2">
              The following components along with the backend Models
              (Mongoose/MongoDB), Express Routes, and Controller logic were
              built by me and are currently used in production at
              SafetyAuditPrep.com.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.cardContainer}
            alignItems="center"
            justify="center"
          >
            <a
              href="/my_components/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.title}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.card} variant="outlined">
                <CardContent
                  className={classes.cardContent}
                  alignItems="center"
                >
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <img
                        className={classes.image}
                        src="images/myComponents/dashboard.png"
                        title="dashboard"
                      />{" "}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="body2"
                        component="p"
                        fontWeight="fontWeightBold"
                      >
                        Home Page Dashboard & Tasks Modal
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.skillCaption}
                      >
                        The home page to a customer account allowing the
                        trucking manager to view upcoming events (using
                        FullCalender API), view/add/edit tasks, and view/filter
                        priorities by their urgency.
                      </Typography>
                    </Grid>{" "}
                  </Grid>
                </CardContent>
              </Card>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
