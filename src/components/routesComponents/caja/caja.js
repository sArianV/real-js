import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import './style.css'
class Caja extends Component{
    contador = 0;
    

    constructor(props){
        super(props);   
    
        this.state = {
        contador:0
    };
    }
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1),
        });   
    }
    restar = (e) =>{
        this.setState({
            contador: (this.state.contador -1)
        })
    }
    render(){
        

        return(
            <Grid container spacing={0}>
                <div className="flex">
                    <h1>
                        Caja de arena
                    </h1>
                    <p>{this.state.contador}</p>
                    <p>
                        <input type="button" value ="Sumar" onClick={this.sumar}/>
                        <input type="button" value ="Restar" onClick={this.restar}/>
                    </p>
                </div>
            </Grid>
        )
    }
}
export default Caja;