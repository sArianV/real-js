import React, { Component } from "react";

import NuevoProveedor from "../../dbCargaProveedor/modal"
import NuevoProducto from "../../dbCargaProducto/modal"
import MostrarProveedores from "../../dbObtenerProveedores/ObtenerProveedores"

import './componentesDeCarga.css'
class componentesDeCarga extends Component {
    render() {
        /**/
        return (
            <div id="test-de-carga">
                <div className="unaCarga"><NuevoProducto /></div>
                <div className="unaCarga"><NuevoProveedor /></div>
                <div className="unaCarga"><MostrarProveedores /></div>
            </div>
        );
    }
}
export default componentesDeCarga;