import React, { Component } from "react";
import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from "@material-ui/core";
import sendAsync from "../../message-control/renderer";

const code = require("../../message-control/MessajeConst");

function get() {
  console.log("send get supplier")
  const response = sendAsync({
    code: code.GET_SUPPLIERS,
  })
  let result;
  response.then((x)=> {
    console.log(x)
    result = x;  
  })
  return result
}

class ObtenerProveedores extends Component {
  constructor(props){
    super(props);
    const x = get()
    console.log(x)
    this.state = {suppliers: []}
  };



  render() {
    
    return (
      

    <TableContainer component={Paper}>
    <Table  size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {this.state.suppliers.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  </TableContainer>
      
    );
  }
}

export default ObtenerProveedores;