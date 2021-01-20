import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import sendAsync from "../../../message-control/renderer";
const code = require("./../../../message-control/MessajeConst");

function send(param) {
  sendAsync({
    code: code.SAVE_PRODUCT,
    param: param,
  }) /*.then((result) => setResponse(result))*/;
}

class CargaProducto extends Component {
  state = {
    barcode_1: "-1",
    ProductName: "yogurt vencido",
    SupplierId: "un chino",
    BasePrice: "50",
    Price: "75",
    Category: "46",
    Stock: "4564",
    trademark: "564598",
  };
  handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    send(this.state);
  };
  render() {
    /**/
    return (
      <Grid item xs={6} spacing={2}>
        <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
        <br/>
          <div>
          <TextField
            variant="outlined"
            id="barcode_1"
            label="Barcode"
            defaultValue="00000000"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="ProductName"
            label="Nombre del Producto"
            defaultValue="Fideos"
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="SupplierId"
            label="Proveedor"
            defaultValue="00000000"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="BasePrice"
            label="Precio Base"
            defaultValue="5"
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="Price"
            onChange={this.handleChange}
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            variant="outlined"
            id="Category"
            label="Categoria"
            defaultValue="ninguna"
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="Stock"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="trademark"
            onChange={this.handleChange}
          />
          </div>
          <button>Submit</button>
        </form>
      </Grid>
    );
  }
}

export default CargaProducto;
