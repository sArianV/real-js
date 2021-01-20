import React, { Component } from "react";
import {Typography, Paper, Grid} from "@material-ui/core";
import clases from "./navbar.module.css";
import ArticlesMenu from "../navbarOptionsList/navbarOptionsList";

class Navbar extends Component {
  render() {
    return (
      <Grid item xs={12} >
        <Paper elevation={3} className={clases.navbar}>
          {/*}<div className = "logo-Area"></div>{*/}

          <Typography variant="h3"  gutterBottom>
            Menu
          </Typography>

          <ArticlesMenu />
        </Paper>
      </Grid>
    );
  }
}

export default Navbar;
