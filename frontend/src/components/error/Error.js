import React, { Component } from 'react';
import './error.css';

const Error = () => {

  return (
    <div className="error" >
      <div className="hh">
        <div id="errorMsg">
          <h2>Pagina no encontrada</h2>
          <h2>La pagina a la que intentas acceder no existe :( </h2>
        </div>

      </div>

    </div>
  );
}

export default Error;