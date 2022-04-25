import React from 'react';
import s from './Card.module.css'

export default function Card({ name, min, max, img, onClose }) {
  // acá va tu código
  return (<div  className={s.carta}>
    <div>
      <button className={s.bC} onClick={onClose} >
        X
      </button>
    </div>
    <h4>{name}</h4>
    <div className={s.linea} >
      <div>
        <p >Min</p>
        <p >{min}°</p>
      </div>
      <div>
        <p >Max</p>
        <p >{max}°</p>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='no se encontro' />
      </div>
    </div>
  </div>)
};