import React, {  useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";



const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundImage: `url(/images/background.jpg)`,
    height: "103vh",
    backgroundSize: "cover",
    backgroundPosition: "center right"
  },
  overlay: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    background: "rgba(0, 0, 0, 0.5)",
  },
  firstName: {
    fontWeight: "bold",
    color: "white"
  },
  lastName: {
    fontWeight: "bold",
    color: "#FFC220"
  },
  caption: {
    fontWeight: "bold",
    color: "white"
  },
}));

export default function Home() {
  const classes = useStyles();
  const [fadedIn, setFadedIn] = React.useState(false);

  useEffect(() => {
    async function fadeInHomeScreen() {
      setFadedIn((prev) => !prev);
    }
    fadeInHomeScreen();
  }, []);

  return (
    <Grid item xs={12} className={classes.homeContainer}>
      <a id="Home">
        
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        className={classes.overlay}
      >
        <Grid item xs={12} align="center" justify="center">
          <Container maxWidth="md" align="center" justify="center" className={classes.container}>
            <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.firstName}
              display="inline"
            >
              Berkley{" "}
            </Typography>
            <Typography
              m={12}
              variant="h2"
              component="h2"
              className={classes.lastName}
              display="inline"
            >
               Olmstead
            </Typography>
            <Typography
              m={12}
              variant="h6"
              component="h6"
              className={classes.caption}
            >
              Experienced Full-Stack Developer
            </Typography>



          </Container>
        </Grid>       
      </Grid>
      </a>
    </Grid>
  );
}
