import React, { Component } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
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

    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Compania</TableCell>
              <TableCell align="right">Telefono</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.state.suppliers ? this.state.suppliers.map((x) => (
          <TableRow key={x.CompanyName}>
            <TableCell component="th" scope="row">
              {x.CompanyName}
            </TableCell>
            <TableCell align="right">{x.Phone}</TableCell>
          </TableRow>
        )):"Cargando"}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ObtenerProveedores;
