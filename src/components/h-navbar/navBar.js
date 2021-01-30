import React from 'react';

import { NavLink } from 'react-router-dom';
import Style from './h-navbar.module.css'
//importar iconos




export default function ListRouter() {

    return (

        

            <ul className={[Style.hlist,Style.navbar].join(' ')}>
                <li>

                    <NavLink to="/" className={Style.white} >
                        <a>Caja</a>
                        
                    </NavLink>
                   
                </li>
                <li>

                    <NavLink className={Style.white} to="/ultimasventas" >

                        <a>Ultimas Ventas</a>
                    </NavLink>
                   
                </li>
                <li>

                    <NavLink className={Style.white} to="/articulos" >

                        <a>Articulos</a>
                    </NavLink>
                   
                </li>
                <li>

                    <NavLink className={Style.white} to="/stock" >

                        <a>Stock</a>
                    </NavLink>
                   
                </li>
                <li>

                    <NavLink className={Style.white} to="/balance">

                        <a>Balance</a>
                    </NavLink>
                   
                </li>
                <li>

                    <NavLink className={Style.white} to="/cargas" >

                        <a>Tests DB</a>
                    </NavLink>
                   
                </li>

            </ul>
      

    );
}