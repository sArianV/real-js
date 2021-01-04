import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className = "home-login">
    <form className={classes.root} noValidate autoComplete="off">
      <div className = "formulario-login">
      <TextField className= "user-input"
          id="standard-username-input"
          label="Username"
          type="username" 
          autoComplete="current-username"
          variant= "filled"
        />
        <TextField className= "user-input"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant= "filled"
        />
      </div> 
    </form>
    </div>
    );
  } 











/*<form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" onChange={this.handleChange} />
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" onChange={this.handleChange} /> 
              <button type="submit"> Crear Cuenta </button>
            </form>*/