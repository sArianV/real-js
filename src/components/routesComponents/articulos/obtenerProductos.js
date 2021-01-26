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
import sendAsync from "../../../message-control/renderer";

const code = require("../../../message-control/MessajeConst");

class ObtenerProductos extends Component {
  constructor(props) {
    super(props);
    console.log("send get products");
    this.state = { productos: []};
  }

  componentDidMount(){
    const response = sendAsync({
      code: code.GET_PRODUCTS,
    });

    response.then((x) => {
      this.setState({productos: x})      
    });
  }

  render() {

    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.state.productos ? this.state.productos.map((x) => (
          <TableRow key={x.ProductName}>
            <TableCell component="th" scope="row">
              {x.ProductName}
            </TableCell>
            <TableCell align="right">{x.Price}</TableCell>
          </TableRow>
        )):"Cargando"}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ObtenerProductos;