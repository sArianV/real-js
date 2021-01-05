import React, { Component } from "react";
import BodyContent from './../bodyContent/bodyContent'
import Navbar from './../navbar/Navbar';
import Grid from '@material-ui/core/Grid';

export default function Landing() {
    
    return (
        <Grid container xs={12} spacing={0}>
            <Navbar />
            <BodyContent />
        </Grid>
    );
}