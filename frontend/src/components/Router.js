import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//componentes 
import Landing from './landingPage/landing'
import Error from './error/Error';
import Caja from './routesComponents/caja/caja';
import UltimasVentas from './routesComponents/ultimasVentas/ultimasVentas';
import Articulos from './routesComponents/articulos/articulos';
import Stock from './routesComponents/stock/stock';
import Balance from './routesComponents/balance/balance';

class Router extends Component{
    render (){
        return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/caja' component={Caja}/>
                <Route exact path='/ultimas-ventas' component={UltimasVentas}/>
                <Route exact path='/articulos' component={Articulos}/>
                <Route exact path='/stock' component={Stock}/>
                <Route exact path='/balance' component={Balance}/>
                <Route component = {Error}/>
            </Switch>
        </BrowserRouter>
        );
    }
}
export default Router;