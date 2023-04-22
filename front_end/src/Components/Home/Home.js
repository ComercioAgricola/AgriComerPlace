import React, { Component } from 'react'
import CategoriaDestacada from './CategoriaDestacada';
import InformacionVendedor from './InformacionVendedor';
import './Home.css'

export default class home extends Component {
  render() {
    return (
      <div>
        <CategoriaDestacada />
        <h2>Productos Destacados</h2>
        <h2>Ofertas Especiales</h2>       
        <InformacionVendedor />
      </div>
    )
  }
}
