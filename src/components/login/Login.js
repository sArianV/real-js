import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './login.css';

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
          Login
    </div>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="formulario-login">
            <TextField className="user-input"
              id="standard-username-input"
              label="Username"
              type="username"
              autoComplete="current-username"
              variant="filled"
            />
            <TextField className="user-input"
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
          </div>
        </form>
        <div className="button_create_account">
        <div className="">
        <Button variant="contained" color="primary" href="/home">
            Ingresar
        </Button>
        </div>
        <div className="">
          <Button variant="contained" color="primary" href="/registrarse">
            Create Account
      </Button>
        </div>
        </div>
      </div>
    
  );
}


