import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Test Dev
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            TEST
          </Typography>

          <div className={classes.icons}>
            <Avatar className={classes.orange}>N</Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
