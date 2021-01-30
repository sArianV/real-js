import React, { Component } from 'react';


import Style from "./products.module.css"


import sendAsync from "../../../message-control/renderer";
const code = require("../../../message-control/MessajeConst");

class Articulos extends Component {
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
          <div>ruta 2</div>
            
        )
    }
}

export default Articulos;