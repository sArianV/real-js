import React, { Component } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import sendAsync from "../../message-control/renderer";
import Button from '@material-ui/core/Button';
import './CargaProducto.css'

const code = require("../../message-control/MessajeConst");
function send(param) {
  sendAsync({
    code: code.SAVE_PRODUCT,
    param: param,
  }) /*.then((result) => setResponse(result))*/;
}

class CargaProducto extends Component {
  state = {
    barcode_1: "-1",
    ProductName: "",
    SupplierId: "",
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
      <Paper elevation={6} spacing={2} className="sizeBox">
        <form onSubmit={this.handleSubmit}>
        
          <div>
          <TextField
            variant="outlined"
            id="barcode_1"
            label="Codigo"
            defaultValue=""
            size="small"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="ProductName"
            label="Nombre del Producto"
            defaultValue=""
            size="small"
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
          variant="outlined"
          id="trademark"
          label="Marca"
          defaultValue=""
          size="small"
          onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="SupplierId"
            label="Proveedor"
            defaultValue=""
            size="small"
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="BasePrice"
            label="Precio Lista"
            size="small"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="Price"
            size="small"
            onChange={this.handleChange}
            label="Precio Venta"
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="stock"
            label="Stock"
            size="small"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="Category"
            label="Categoria"
            size="small"           
            onChange={this.handleChange}
          />
          
          </div>
          <br/>
          
          <Button variant="contained" type="submit" color="secondary" size="small" id="save-product-button">
            Guardar Producto
          </Button>
          {/*<button>Submit</button>*/}
          
          
        </form>
      </Paper>
    );
  }
}

export default CargaProducto;
