import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

const NavBar = ({ setNav }) => {
  const classes = useStyles();
  // const location = useLocation();
  const studentAvailableHandler = () => {
    setNav(1);
  };
  const AddstudentHandler = () => {
    setNav(0);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          // component={Link}
          // to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Attandence
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <Button
          // component={Link}
          // to="/available"
          variant="contained"
          color="primary"
          className={classes.image}
          onClick={studentAvailableHandler}
        >
          Student Available
        </Button>
        <Button
          // component={Link}
          // to="/"
          variant="contained"
          color="primary"
          className={classes.image}
          onClick={AddstudentHandler}
        >
          Add Student
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
