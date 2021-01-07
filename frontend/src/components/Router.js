import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes 
import Landing from './landingPage/landing'
import Error from './error/Error';
import Caja from './routesComponents/caja/caja';
import UltimasVentas from './routesComponents/ultimasVentas/ultimasVentas';
import Articulos from './routesComponents/articulos/articulos';
import Stock from './routesComponents/stock/stock';
import Balance from './routesComponents/balance/balance';
import A from './routesComponents/arian/a';
import N from './routesComponents/nico/n';
import V from './routesComponents/vale/v';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar/Navbar';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Grid container xs={12} spacing={0}>
                    <Grid container xs={2} spacing={0}>
                        <Navbar />
                    </Grid>
                    <Grid container xs={10} spacing={0}>
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route exact path='/caja' component={Caja} />
                            <Route exact path='/ultimasventas' component={UltimasVentas} />
                            <Route exact path='/articulos' component={Articulos} />
                            <Route exact path='/stock' component={Stock} />
                            <Route exact path='/balance' component={Balance} />
                            <Route exact path='/a' component={A} />
                            <Route exact path='/n' component={N} />
                            <Route exact path='/v' component={V} />
                            <Route component={Error} />
                        </Switch>
                    </Grid>
                </Grid>
            </BrowserRouter>
        );
    }
}
export default Router;