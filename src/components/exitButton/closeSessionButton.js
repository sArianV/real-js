import React from 'react';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './closeSessionButton.css'
/*const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));*/

export default function IconLabelButtons() {
  //const classes = useStyles();

  return (

    <Button
      href="/"
      variant="contained"
      className="{classes.button} on-bot exit-button-color"
      startIcon={<ExitToAppIcon />}
    >
      Salir
    </Button>

  );
}