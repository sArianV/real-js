import React, { Component } from "react";

import sendAsync from "../../message-control/renderer";

const code = require("../../message-control/MessajeConst");

class ObtenerProveedores extends Component {
  constructor(props) {
    super(props);
    console.log("send get supplier");
    this.state = { suppliers: []};
  }

  componentDidMount(){
    const response = sendAsync({
      code: code.GET_SUPPLIERS,
    });

    response.then((x) => {
      this.setState({suppliers: x})
    });
  }

  render() {

    return (<div> tabla obtener proveedores</div>
     
    );
  }
}

export default ObtenerProveedores;
