import React from 'react';
import Card from './Card';
import s from './Cards.module.css'


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (<div  className={s.container}>
    {props.cities.map(x =>
      <Card
      max={x.main.temp_max}
      min={x.main.temp_min}
      name={x.name}
      img={x.weather[0].icon}
      onClose={() => alert(x.name)}
      key={x.id}
      />
    )}
  </div>)
};