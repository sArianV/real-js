import React, { Component } from "react";

import sendAsync from "../../message-control/renderer";

import Style from './cargaProveedor.module.css';


const code = require("../../message-control/MessajeConst");
function send(param) {
  sendAsync({
    code: code.SAVE_SUPPLIER,
    param: param,
  }) /*.then((result) => setResponse(result))*/;
}

class CargaProveedor extends Component {
  state = {
    CompanyName: "",
    Phone: "",
  };
  handleChange = (e) => {
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
      <div>form para carga de proveedores</div>
/*
      <Paper elevation={6} className={Style.sizeBox}>
        <div className="form-tittle"><h3>Cargar Proveedor</h3>
          <Divider />
        </div>
        <form onSubmit={this.handleSubmit}>

          <div>
            <TextField
              variant="outlined"
              id="CompanyName"
              label="Nombre de Proveedor"
              defaultValue=""
              size="small"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <TextField
              variant="outlined"
              id="Phone"
              label="Telefono"
              defaultValue=""
              size="small"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <Button variant="contained" color="secondary" type="submit" size="small" className={Style.buttonProveedor}>
            Guardar Proveedor
          </Button>

        </form>
      </Paper>
    */
    );
  }
}

export default CargaProveedor;
