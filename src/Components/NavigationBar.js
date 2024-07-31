import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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
    marginTop: "10px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(50, 50 ,50)",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
    marginBottom: "5px",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: "1px solid rgb(90,90,90)",
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
        {["Home", "Skills", "Experience", "Education"].map((text) => (
          <a key={text} href={"#" + text} className={classes.navLink}>
            <ListItem button className={classes.listItem} key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </Drawer>
    </Hidden>
  );
}
