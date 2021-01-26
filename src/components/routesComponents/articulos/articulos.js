import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Products from "./obtenerProductos"
import Style from "./products.module.css"
class Articulos extends Component {

    render() {
        return (

            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Paper className={Style.articlesMenu}>xs=12</Paper>
                </Grid>
                <Grid item xs={10}>
                    <Products />
                </Grid>
                
            </Grid>

        )
    }
}

export default Articulos;