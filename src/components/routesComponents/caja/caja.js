import React, {Component} from 'react';
import { Button } from 'antd';

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
            
                <div className="flex">
                    <h1>
                        Caja de arena
                    </h1>
                    <p>{this.state.contador}</p>
                    <p>
                        <Button type="primary"  onClick={this.sumar}> Sumar </Button>
                        <Button type="primary"  onClick={this.restar}> Restar</Button>
                    </p>
                </div>
            
        )
    }
}
export default Caja;