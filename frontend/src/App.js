import './App.css';
import '@fontsource/roboto';

//import Material ui
import Grid from '@material-ui/core/Grid';


//import componentes
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import CreateAccount from './components/create_account/CreateAccount';


require('pretty-error').start();


function App() {
  return (
    <div className="App">
      <Grid container xs={12} spacing={0}>
        <CreateAccount />
      </Grid>
    </div>
  );
}

export default App;
