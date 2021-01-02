import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import './navbar.css';
import ArticlesMenu from '../navbarOptionsList/navbarOptionsList';
import Grid from '@material-ui/core/Grid';
import Exit from '../exitButton/closeSessionButton'


class Navbar extends Component{
    render(){
        return (
            
            <Grid item xs={2}  className = "navbar" className = "nomargin">
                <Paper elevation={3} className = "navbar" >
            

                {/*}<div className = "logo-Area"></div>{*/}
                
                    <div className = "section-name"> 
                        <h2>Menu</h2>
                    </div>   
                    
                    <ArticlesMenu />
                    <Exit /> 
                </Paper>
            </Grid> 
                
            
        )
    }
}

export default Navbar;


