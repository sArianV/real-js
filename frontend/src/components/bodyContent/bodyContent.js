import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import Test from './../pruebaState/testState'


export default function BodyContent() {
    
  
    return (
        <Grid container xs={10} spacing={0}>
            <Test />
        </Grid>
    );
  }