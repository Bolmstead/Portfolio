import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(() => ({
  container: {
    background: "rgb(50, 50 ,50)",
    width: "100%",
    backgroundSize: "cover",
    paddingBottom: "50px",
    paddingTop: "30px",
  },
  contact: {
    fontFamily: "Roboto",
    marginTop: "0px",
    marginBottom: "10px",
  },
  contactContainer: {
    marginTop: "25px",
  },
  icon: {
    fontSize: 50,
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
              md={6}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="https://g.page/idahocapitol?share"
                className={classes.contactLink}
              >
                <LocationOnIcon className={classes.icon} />
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.contact}
                >
                  700 W JEFFERSON ST. BOISE ID, 83702
                </Typography>
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              align="center"
              justify="center"
              className={classes.contactContainer}
            >
              <a
                href="mailto:someone@yoursite.com"
                className={classes.contactLink}
              >
                <MailIcon className={classes.icon} />
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.contact}
                >
                  {" "}
                  MURPHY@WITTMEYERASSOCIATES.COM
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </a>
    </Grid>
  );
}
