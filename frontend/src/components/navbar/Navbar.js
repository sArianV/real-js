import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './navbar.css';
import ArticlesMenu from './../navbarOptionsList/ArticlesMenuOptions';




class Navbar extends Component{
    render(){
        return (
            
                <Grid item xs={2} elevation={3} className = "navbar">
                    <Paper  className= "navbar"elevation={3} >

                        <div className = "logo-Area"></div> 
                        <div className = "section-name"> 
                            <h2>Menu</h2>
                        </div>   
                        <ArticlesMenu />
                        
                        <ArticlesMenu />
                    </Paper>  
                </Grid>
            
        )
    }
}

export default Navbar;


