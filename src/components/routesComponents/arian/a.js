import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import sendAsync from '../../../message-control/renderer';
const code = require('./../../../message-control/MessajeConst')

function send(param) {
    sendAsync({ code: code.SAVE_PRODUCT, param: param })/*.then((result) => setResponse(result))*/;
}




class A extends Component {
    state = {      
      barcode_1:"-1",
      ProductName:"yogurt vencido",
      SupplierId:"un chino",
      BasePrice:"50",
      Price:"75",
      Category:"46",
      Stock:"4564",
      trademark:"564598"        
    }
      handleChange = (e) => {
        console.log(e.target.id, e.target.value);
        this.setState({
          [e.target.id]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        send(this.state)
      }
    render() {
        /**/
        return (
            <Grid xs={12} spacing={0}>
                {console.log()} <br/>
                {console.log()}
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="barcode_1">codigo de barras:</label>
                <input type="text" id="barcode_1" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="ProductName">Name del Producto:</label>
                <input type="text" id="ProductName" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="SupplierId">Id del proveedor:</label>
                <input type="text" id="SupplierId" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="BasePrice">precio lista:</label>
                <input type="text"id="BasePrice" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="Price">precio :</label>
                <input type="text"id="Price" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="Category">categoria:</label>
                <input type="text"id="Category" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="Stock">cantidad de productos:</label>
                <input type="text"id="Stock" onChange={this.handleChange} />
                <br/>
                <br/>
                <label htmlFor="trademark">cod de barra:</label>
                <input type="text"id="trademark" onChange={this.handleChange} />
                <br/>
                <br/>
                <button>Submit</button>
        </form>
                
            </Grid>

        )
    }
}

export default A;