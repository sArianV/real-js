import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import sendAsync from '../../../message-control/renderer';
  
class V extends Component {
    state = {
        name:null,
        supplierId:null,
        basePrice:null,
        price:null,
        category:null,
        stock:null,
        trademark:null
      }
      handleChange = (e) => {
        console.log(e.target.id, e.target.value);
        this.setState({
          [e.target.id]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
        //save(this.state)
      }
    render() {
        return (
        <div>    
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name del Producto:</label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="age">Id del proveedor:</label>
                <input type="text" id="supplierId" onChange={this.handleChange} />
                <label htmlFor="skill">precio lista:</label>
                <input type="text"id="basePrice" onChange={this.handleChange} />
                <label htmlFor="skill">precio :</label>
                <input type="text"id="price" onChange={this.handleChange} />
                <label htmlFor="skill">categoria:</label>
                <input type="text"id="category" onChange={this.handleChange} />
                <label htmlFor="skill">cantidad de productos:</label>
                <input type="text"id="stock" onChange={this.handleChange} />
                <label htmlFor="skill">cod de barra:</label>
                <input type="text"id="tramedark" onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
            
        )
    }
}

export default V;



