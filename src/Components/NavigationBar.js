import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";



const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    backgroundColor: "rgb(50, 50 ,50)",
  },
  name: {
    color: "white",
    fontWeight: "normal",
    marginBottom: "20px",
    marginTop: "10px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    alignItems: "center"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(50, 50 ,50)",
    alignItems: "center",
    justifyContent: "center"

  },
  listItem: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
    marginBottom: "5px"
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: "1px solid rgb(90,90,90)"

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  navLink: {
    textDecoration: "none",
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
              <Avatar
                alt="Avatar"
                src="/images/avatar.jpg"
                className={classes.avatar}
              />
              <Typography variant="h6" className={classes.name}>Berkley Olmstead</Typography>
              {["Home", "About", "Skills", "Projects", "Education"].map((text) => (
                  <a href={"#" + text} className={classes.navLink}>
                    <ListItem button className={classes.listItem} key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </a>
              ))}

      </Drawer>
      </Hidden>
  );
}
