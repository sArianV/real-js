import React, {Component} from 'react';
import './error.css';
import imga from "./../../assets/images/error_pag.gif";

const Error = () =>{

    return(
        <div className="error" >
          <div className="hh">
          <h2>Pagina no encontrada</h2> 
            <h2>La pagina a la que intentas acceder no existe en la web</h2>
          </div>  
          <div className="imgError">
             <img src= {imga}/>
          </div>
        </div>
    );
}

export default Error;