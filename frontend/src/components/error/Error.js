import React, { Component } from 'react';
import './error.css';
import Grid from '@material-ui/core/Grid';
const Error = () => {

  return (
    <Grid container xs={10} spacing={0}>
      <div className="error" >
        <div className="hh">
          <div id="errorMsg">
            <h2>Pagina no encontrada</h2>
            <h2>La pagina a la que intentas acceder no existe :( </h2>
          </div>

        </div>

      </div>
    </Grid>
  );
}

export default Error;