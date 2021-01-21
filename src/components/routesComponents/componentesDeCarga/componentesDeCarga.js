import React, { Component } from "react";
import { Divider, Grid } from "@material-ui/core";
import CargaProductos from "../../dbCargaProducto/CargaProducto"
import CargaProveedor from "../../dbCargaProveedor/CargaProveedor"
import './componentesDeCarga.css'
class componentesDeCarga extends Component {
    render() {
        /**/
        return (
            <div id="test-de-carga">
                <div className="unaCarga"><CargaProductos /></div>
                
                <div className="unaCarga"><CargaProveedor /></div>
            </div>
        );
    }
}
export default componentesDeCarga;