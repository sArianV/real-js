import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Caja from './components/routesComponents/caja/caja';	
import UltimasVentas from './components/routesComponents/ultimasVentas/ultimasVentas';
import Articulos from './components/routesComponents/articulos/articulos';	
import Stock from './components/routesComponents/stock/stock';	
import Balance from './components/routesComponents/balance/balance';	
import Cargas from './components/routesComponents/componentesDeCarga/componentesDeCarga';	
import Grid from '@material-ui/core/Grid';	
import HNavbar from './components/h-navbar/h-navbar';

import './App.css';	
function App() {

    return (
        <Grid container spacing={0}>
            <BrowserRouter>
                    
                        <HNavbar />
                    
                    <Grid item xs={12} className="my-body">
                        <Switch>
                            <Route exact path='/' component={Caja} />
                            <Route exact path='/ultimasventas' component={UltimasVentas} />
                            <Route exact path='/articulos' component={Articulos} />
                            <Route exact path='/stock' component={Stock} />
                            <Route exact path='/balance' component={Balance} />
                            <Route exact path='/cargas' component={Cargas} />
                        </Switch>
                    </Grid>
            </BrowserRouter>
        </Grid>
    );
}
export default App;