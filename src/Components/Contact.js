import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(() => ({
  container: {
    background: "rgb(50, 50 ,50)",
    width: "100%",
    backgroundSize: "cover",
    paddingBottom: "50px",
    paddingTop: "30px",
  },
  contact: {
    marginTop: "10px",
    marginBottom: "10px",
    color: "white",
  },
  contactContainer: {
    marginTop: "25px",
  },
  icon: {
    fontSize: 60,
    color: "white",
    marginBottom: "10px"
  },
  githubIcon: {
    fontSize: 53,
    color: "white",
    marginBottom: "10px"
  },
  contactLink: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      className={classes.container}
      align="center"
      justify="center"
    >
      <a id="contact">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            direction="row"
          >
            <Grid
              item
              xs={12}
              md={4}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="mailto:olms2074@gmail.com"
                className={classes.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon className={classes.icon} /><br/>
                <Typography
                  variant="h7"
                  component="h7"
                  className={classes.contact}
                >
                  {" "}
                  olms2074@gmail.com
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="https://github.com/Bolmstead"
                className={classes.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={classes.githubIcon} /><br/>
                <Typography
                  variant="h7"
                  component="h7"
                  className={classes.contact}
                >
                  github.com/Bolmstead
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="https://www.linkedin.com/in/berkleyolmstead/"
                className={classes.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={classes.icon} /><br/>
                <Typography
                  variant="h7"
                  component="h7"
                  className={classes.contact}
                >
                  linkedin.com/in/berkleyolmstead
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
