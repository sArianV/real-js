import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Style from "./products.module.css"
import NuevoProducto from "../../dbCargaProducto/modal"
import TablaPiola from "./tablaDeProductos"

import sendAsync from "../../../message-control/renderer";
const code = require("../../../message-control/MessajeConst");

class Articulos extends Component {
    constructor(props) {
        super(props);
        console.log("send get products");
        this.state = { productos: []};
      }
    
      componentDidMount(){
        const response = sendAsync({
          code: code.GET_PRODUCTS,
        });
    
        response.then((x) => {
          this.setState({productos: x})      
        });
      }
    render() {
        return (

            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Paper className={Style.articlesMenu}>
                        <NuevoProducto className={Style.flexItem} />
                        <NuevoProducto className={Style.flexItem} />
                        <NuevoProducto className={Style.flexItem} />
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    {/*<Paper className={Style.articlesMenu}></Paper>*/}
                        <TablaPiola prod={this.state.productos}/>
                    

                </Grid>

            </Grid>

        )
    }
}

export default Articulos;