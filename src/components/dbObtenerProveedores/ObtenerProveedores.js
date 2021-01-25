import React, { Component } from "react";
import { TextField, Paper } from "@material-ui/core";
import sendAsync from "../../message-control/renderer";
import Button from '@material-ui/core/Button';
import Style from './obtenerProveedores.module.css';

const code = require("../../message-control/MessajeConst");
function get() {
  console.log("send get supplier")
  const result = sendAsync({
    code: code.GET_SUPPLIERS,
  }) /*.then((result) => setResponse(result))*/;
  console.log(result)
  result.then((x)=> console.log(x))
  //return result
}

class ObtenerProveedores extends Component {
  constructor(props){
    super(props);
    
    this.state = {suppliers: get()}
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    get(this.state);
  };
  render() {
    /**/
    return (
      
        <Paper elevation={6} className={Style.sizeBox}>
          {this.state.suppliers}
        </Paper>
      
    );
  }
}

export default ObtenerProveedores;