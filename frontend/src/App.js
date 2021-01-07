import './App.css';
import '@fontsource/roboto';

//import Material ui
//import Grid from '@material-ui/core/Grid';
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Router from './components/Router'


require('pretty-error').start();


function App() {
  return (
    <Router />
    );
}

export default App;