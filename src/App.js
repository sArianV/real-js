import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes 
import Caja from './components/routesComponents/caja/caja';
import UltimasVentas from './components/routesComponents/ultimasVentas/ultimasVentas';
import Articulos from './components/routesComponents/articulos/articulos';
import Stock from './components/routesComponents/stock/stock';
import Balance from './components/routesComponents/balance/balance';
import CargaProducto from './components/routesComponents/cargaProducto/CargaProducto';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {

    return (
        <Grid container spacing={0}>
            <BrowserRouter>
                    <Grid item xs={2}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={10}>
                        <Switch>
                            <Route exact path='/' component={Caja} />
                            <Route exact path='/ultimasventas' component={UltimasVentas} />
                            <Route exact path='/articulos' component={Articulos} />
                            <Route exact path='/stock' component={Stock} />
                            <Route exact path='/balance' component={Balance} />
                            <Route exact path='/cargaProducto' component={CargaProducto} />
                        </Switch>
                    </Grid>
            </BrowserRouter>
        </Grid>
    );
}

export default App;
