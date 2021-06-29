import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FadeInSection from "./FadeInSection";

const useStyles = makeStyles(() => ({
  specializationsCard: {
    backgroundColor: "white",
    height: "225px",
    width: "225px",
    borderRadius: "3px",
    filter: "drop-shadow(3px 3px 3px #222222)",
  },
  cardTitle: {
    marginTop: "110px",
    color: "white",
  },

}));

export default function Specializations({ title, pic }) {
  const classes = useStyles();

  return (
    <Grid item sm={6} md={4} align="center" justify="center">
        <Card
          className={classes.specializationsCard}
          align="center"
          justify="center"
          style={{
            backgroundImage: `url(/images/image.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <Typography variant="body1" component="p" className={classes.cardTitle}>
            {title}
          </Typography>
        </Card>
    </Grid>
  );
}
