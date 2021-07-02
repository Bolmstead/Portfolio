import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar: {
    backgroundColor: "rgb(50, 50 ,50)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  name: {
    color: "white",
    fontWeight: "normal",
    marginBottom: "20px",
    marginTop: "10px"
  },
  listItem: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
    marginBottom: "5px",
    textTransform: "none",
    marginRight: "5px"
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: "1px solid rgb(90,90,90)",
    marginRight: "12px"

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



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Hidden mdUp>

    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <a href="#Home" className={classes.navLink}>
        <Avatar
                alt="Avatar"
                src="/images/avatar.jpg"
                className={classes.avatar}
              />
        </a>
        {["About", "Education", "Skills", "Projects"].map((text) => (
          <a href={"#" + text} className={classes.navLink}>
            <Button className={classes.listItem} key={text}>
              <ListItemText primary={text} className={classes.listItemText} />
            </Button>
          </a>
        ))}
        </Toolbar>
      </AppBar>
    </div>
    </Hidden>
  );
}