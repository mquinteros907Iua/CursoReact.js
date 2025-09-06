import React, { Component } from "react";

export class PorfolioApp extends Component {

  constructor(){
    this.state = []
  }
  render() {
    return (
      <div>
        <h1>
          Esto es un componente de clase 
        </h1>
        <h4>¿Encontraron las diferencias?</h4>
        <p>Hola mundo desde un componente de clase</p>
      </div>
    );
  }
}

export default PorfolioApp;
