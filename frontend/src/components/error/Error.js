import React, { Component } from 'react';
import './error.css';
import Grid from '@material-ui/core/Grid';
const Error = () => {

  return (
    
      <div className="error" >
        <div className="hh">
          <div id="errorMsg">
            <h2>Pagina no encontrada</h2>
            <h3>La pagina a la que intentas acceder no existe :( </h3>
          </div>

        </div>

      </div>
  );
}

export default Error;