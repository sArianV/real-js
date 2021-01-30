import React, { Component } from "react";

import sendAsync from "../../message-control/renderer";


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
      <div>aca cargamos db</div>
    );
  }
}

export default CargaProducto;
