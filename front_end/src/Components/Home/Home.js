import React, { Component } from 'react'
import CategoriaDestacada from './CategoriaDestacada';
import InformacionVendedor from './InformacionVendedor';

export default class home extends Component {
  render() {
    return (
      <div>
        <CategoriaDestacada />
        <InformacionVendedor />
      </div>
    )
  }
}
