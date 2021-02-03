import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import sendAsync from "../../../message-control/renderer";
import Autocomplete from '@material-ui/lab/Autocomplete';


import './style.css';

const code = require("../../../message-control/MessajeConst");

class Caja extends Component {
    
    constructor(props) {
        super(props);
        this.state = { productos: []};
      }
    
      componentDidMount(){
        const response = sendAsync({
          code: code.GET_PRODUCTS,
        });
    
        response.then((product) => {
        
          product.map((x)=> x.ProductName =  x.ProductName.charAt(0).toUpperCase()+ x.ProductName.slice(1))
          this.setState({productos: product})   
          console.log(product)   
        });
      }
 
    render() {


        return (
            <Grid container spacing={0}>
                <Autocomplete
                    id="grouped-products"
                    options={this.state.productos.sort((a, b) => a.ProductName.charAt(0) - b.ProductName.charAt(0))}
                    groupBy={(option) => option.ProductName.charAt(0)}
                    getOptionLabel={(option) => option.ProductName}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Productos" variant="outlined" />}
                />
                <Autocomplete
                    id="grouped-products"
                    options={this.state.productos.sort((a, b) => a.barcode_1- b.barcode_1)}
                    getOptionLabel={(option) => option.barcode_1}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Codigo" variant="outlined" />}
                />
                <div className="flex">
                    <h1>
                        Caja de arena
                    </h1>
                    <p>{this.state.contador}</p>
                    <p>
                        <input type="button" value="Sumar" onClick={this.sumar} />
                        <input type="button" value="Restar" onClick={this.restar} />
                    </p>
                </div>
            </Grid>
        )
    }
}
export default Caja;