import React, {Component} from 'react';

class Header extends  Component{
    render(){
        return(
            <header id = "header">
                <div className = "center">
                    {/*Logo */}
                    <div id="logo"> 
                        <img src= "../assets/images/logo.svg" class="app-logo" alt= "Logotipo"/>
                        <span id = "brand">
                           <strong> </strong> 
                        </span>
                    </div>
                </div>
            </header>    
        );
    }
}

export default Header;