import React from 'react';
import s from './Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.boton}>
      <div className={s.caja}>
        <input type="text" placeholder='City...' />
        <button onClick={() => props.onSearch('buscando...')}>Agregar</button>
      </div>
    </div>)
};