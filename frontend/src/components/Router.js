import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes 
import Login from './login/Login';
import CreateAccount from './create_account/CreateAccount';
import Landing from './landingPage/landing'

class Router extends Component{
    render (){
        return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Landing}/>
            <Route path='/registrarse' component={CreateAccount} />
          </Switch>
          </BrowserRouter>
        );
    }
}
export default Router;