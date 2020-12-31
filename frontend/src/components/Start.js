import React, {Component} from 'react';

class Start extends Component{
    render(){
        let losPibe = {
            participantes:['Arian','Vale','Nico']
        };
        
        return(
      <div className= "mi-componente">
        <ol>
            {
                losPibe.participantes.map((participante, i)=>{
                    return( <li key={i}>
                       <h1>participante {participante}</h1>
                    </li>)
                })
            } 
        </ol>
        </div>
        )
    }
}

export default Start;