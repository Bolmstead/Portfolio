import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  mobileMenu: {
    backgroundColor: "rgb(50, 50 ,50)",
  },
  root: {
    flexGrow: 1,
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
    marginTop: "10px",
  },
  listItem: {
    color: "rgb(50, 50 ,50)",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "left",
    marginBottom: "5px",
    width: "30vw",
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
    backgroundColor: "rgb(50, 50 ,50)",
    padding: theme.spacing(3),
  },
  navLink: {
    textDecoration: "none",
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "rgb(50, 50 ,50)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "rgb(50, 50 ,50)",
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="white"
        onClick={handleClick}
      >
        Open Menu
      </MenuIcon>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {["Home", "About", "Skills", "Projects"].map((text) => (
          <a href={"#" + text} className={classes.navLink}>
            <StyledMenuItem button className={classes.listItem} key={text}>
              <ListItemText primary={text} className={classes.listItemText} />
            </StyledMenuItem>
          </a>
        ))}
      </StyledMenu>
    </div>
  );
}
