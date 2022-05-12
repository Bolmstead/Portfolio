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
    paddingBottom: "20px",
    paddingTop: "10px",
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
    fontSize: 40,
    color: "white",
    marginBottom: "10px",
    marginLeft: "40px",
    marginRight: "40px",
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
      justify="flex-end"
    >
      <a id="contact">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
          maxWidth="md"
        >
          <a
            href="mailto:olms2074@gmail.com"
            className={classes.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon className={classes.icon} />
          </a>

          <a
            href="https://github.com/Bolmstead"
            className={classes.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={classes.icon} />
          </a>

          <a
            href="https://www.linkedin.com/in/berkleyolmstead/"
            className={classes.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className={classes.icon} />
          </a>
        </Container>
      </a>
    </Grid>
  );
}
