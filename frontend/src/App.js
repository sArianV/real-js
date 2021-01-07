import './App.css';
import '@fontsource/roboto';

//import Material ui
//import Grid from '@material-ui/core/Grid';
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Router from './components/Router'

//import componentes
import Grid from '@material-ui/core/Grid';
import Navbar from './components/navbar/Navbar';

require('pretty-error').start();


function App() {
  return (

    <Grid container xs={12} spacing={0}>
      <Grid container xs={2} spacing={0}>
        <Navbar />
      </Grid>
      <Grid container xs={10} spacing={0}>
        <Router />
      </Grid>
    </Grid>




  );
}

export default App;