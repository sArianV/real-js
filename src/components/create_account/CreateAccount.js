import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './createAccount.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
 


    <div className="home-login">
      <div className="titulo">
        Create Account
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="formulario-login">
          <TextField className="user-input"
            id="standard-username-input"
            label="Ingrese su username"
            type="username"
            autoComplete="current-username"
            variant="filled"
          />
          <TextField className="user-input"
            id="standard-username-input"
            label="Ingrese su email"
            type="username"
            autoComplete="current-username"
            variant="filled"
          />
          <TextField className="user-input"
            id="standard-password-input"
            label="Ingrese su Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </div>
      </form>
      <div className="button_create_account">
        <Button variant="contained" color="primary" href="#contained-buttons">
          Register
        </Button>
      </div>
      <div className="button_atras">
        <Button variant="contained" color="secondary" href="/">
          Atras
        </Button>
      </div>
    </div>

  );
}


