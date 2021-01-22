import React, { Component } from "react";
import { Divider, Grid } from "@material-ui/core";
import CargaProductos from "../../dbCargaProducto/CargaProducto"
import NuevoProveedor from "../../dbCargaProveedor/modal"
import NuevoProducto from "../../dbCargaProducto/modal"

import './componentesDeCarga.css'
class componentesDeCarga extends Component {
    render() {
        /**/
        return (
            <div id="test-de-carga">
                <div className="unaCarga"><NuevoProducto /></div>
                <div className="unaCarga"><NuevoProveedor /></div>
            </div>
        );
    }
}
export default componentesDeCarga;