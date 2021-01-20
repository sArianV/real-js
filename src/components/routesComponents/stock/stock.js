import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
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
      <Grid item xs={6} spacing={2}>
        <form onSubmit={this.handleSubmit}>
          <div>
          <TextField
            variant="outlined"
            id="id_product"
            label="Id_Product"
            defaultValue="00000000"
            onChange={this.handleChange}
          />
          </div>
          <button>Submit</button>
        </form>
      </Grid>
    );
  }
}

export default stock;
