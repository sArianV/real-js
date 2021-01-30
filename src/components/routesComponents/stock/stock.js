import React, { Component } from "react";
import sendAsync from "../../../message-control/renderer";
const code = require("../../../message-control/MessajeConst");

function send(param) {
  sendAsync({
    code: code.GET_PRODUCT,
    param: param,
  }) /*.then((result) => setResponse(result))*/;
}

class stock extends Component {
  state = {
    id_product:null
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    send(this.state);
  };
  render() {
    /**/
    return (
      <div>tabla de prodductos</div>
    );
  }
}

export default stock;
