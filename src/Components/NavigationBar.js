import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    backgroundColor: "rgb(50, 50 ,50)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "rgb(50, 50 ,50)",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(50, 50 ,50)",
  },
  listItem: {
    color: "white",
    display:'flex',
    justifyContent:'flex-end'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  navLink: {
    textDecoration: "none"
  }
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        align="center"
        justify="center"
      >
        <Avatar
          alt="Avatar"
          src="/public/images/headshot.jpg"
          className={classes.avatar}
        />
        <List>
          {["Home", "About", "Skills", "Projects", "Education"].map((text) => (
            <a href={"#" + text} className={classes.navLink}>
              <ListItem
                button
                className={classes.listItem}
                key={text}
              >
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
