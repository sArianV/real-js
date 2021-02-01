import React from 'react';

import { NavLink } from 'react-router-dom';
import Style from './h-navbar.module.css'
//importar iconos




export default function ListRouter() {

    return (
            <ul className={[Style.hlist,Style.navbar].join(' ')}>
                <li>
                    <NavLink to="/" className={Style.white} >
                        Caja            
                    </NavLink>
                </li>
                <li>
                    <NavLink className={Style.white} to="/ultimasventas" >
                        Ultimas Ventas
                    </NavLink>
                </li>
                <li>
                    <NavLink className={Style.white} to="/articulos" >
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink className={Style.white} to="/stock" >
                        Stock
                    </NavLink>
                </li>
                <li>
                    <NavLink className={Style.white} to="/balance">
                        Balance
                    </NavLink>
                </li>
                <li>
                    <NavLink className={Style.white} to="/cargas" >
                        Tests DB
                    </NavLink>
                </li>
            </ul>
    );
}