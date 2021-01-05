import './App.css';
import '@fontsource/roboto';

//import Material ui
import Grid from '@material-ui/core/Grid';
import { Route, BrowserRouter, Switch } from 'react-router-dom'


//import componentes
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import CreateAccount from './components/create_account/CreateAccount';
import BodyContent from './components/bodyContent/bodyContent'

require('pretty-error').start();


function App() {
  return (
    <div className="container">
      <div className="App">
        <Grid container xs={12} spacing={0}>
          <Switch>
            <Route exact path='/' component={Navbar}/>
            <Route path='/login' component={Login}/>
            <Route path='/createaccount' component={CreateAccount} />
          </Switch>
        </Grid>
      </div>
    </div>
  );
}

export default App;