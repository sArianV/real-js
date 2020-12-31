import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import 'fontsource-roboto';

//import Material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


//import componentes
import Navbar from './components/Navbar';


require('pretty-error').start();


function App() {
  return (
    <div className="App">
      <Grid container xs={12} spacing={0}>
        <Navbar />


      </Grid>
    </div>
  );
}

export default App;
