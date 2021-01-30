import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Caja from './components/routesComponents/caja/caja';	
import UltimasVentas from './components/routesComponents/ultimasVentas/ultimasVentas';
import Articulos from './components/routesComponents/articulos/articulos';	
import Stock from './components/routesComponents/stock/stock';	
import Balance from './components/routesComponents/balance/balance';	
import Cargas from './components/routesComponents/componentesDeCarga/componentesDeCarga';	

import HNavbar from './components/h-navbar/navBar';
import 'antd/dist/antd.css';
import './App.css';	
function App() {

    return (
        
            <BrowserRouter>
                    
                        <HNavbar />
                    
                    <div  className="my-body">
                        <Switch>
                            <Route exact path='/' component={Caja} />
                            <Route exact path='/ultimasventas' component={UltimasVentas} />
                            <Route exact path='/articulos' component={Articulos} />
                            <Route exact path='/stock' component={Stock} />
                            <Route exact path='/balance' component={Balance} />
                            <Route exact path='/cargas' component={Cargas} />
                        </Switch>
                    </div>
            </BrowserRouter>
        
    );
}
export default App;