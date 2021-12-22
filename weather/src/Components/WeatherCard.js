import React from 'react';
import { useSelector } from 'react-redux';

export default function WeatherCard() {
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  return (
    <div className="card">
      <div className="card__info">
        <p className="card__info__place">city: {city}</p>
        <p className="card__info__date">time : {Date(Date.now()).slice(0,24)}</p>
      </div>
      <div className="card__weather">
        <p className="card__weather__temp">{weather}° C</p>
      </div>
    </div>
  );
}