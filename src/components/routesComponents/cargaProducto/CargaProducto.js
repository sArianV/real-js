import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import sendAsync from "../../../message-control/renderer";
import Button from '@material-ui/core/Button';
import './CargaProducto.css'

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
      <Grid item spacing={2} className="sizeBox">
        <form onSubmit={this.handleSubmit}>
        
          <div>
          <TextField
            variant="outlined"
            id="barcode_1"
            label="Codigo"
            defaultValue=""
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="ProductName"
            label="Nombre del Producto"
            defaultValue=""
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
          onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="SupplierId"
            label="Proveedor"
            defaultValue=""
            onChange={this.handleChange}
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="BasePrice"
            label="Precio Lista"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="Price"
            onChange={this.handleChange}
            label="Precio Venta"
          />
          </div>
          <br/>
          <div>
          <TextField
            variant="outlined"
            id="Stock"
            label="Stock"
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            id="Category"
            label="Categoria"            
            onChange={this.handleChange}
          />
          
          </div>
          <br/>
          
          <Button variant="contained" type="submit" color="secondary" id="save-product-button">
            Guardar Producto
          </Button>
          {/*<button>Submit</button>*/}
          
          
        </form>
      </Grid>
    );
  }
}

export default CargaProducto;
