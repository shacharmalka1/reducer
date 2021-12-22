import React, { useContext, useEffect, useState } from "react";
import mainContext from "../Contexts/mainContext";
import { getWeather } from "../Services/weather";

export default function Weather() {
  const [currWeather, setCurrWeather] = useState([]);
  const { cities, dispatch } = useContext(mainContext);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    dispatch({ type: "INITIAL_DATA", payload: { city: "london" } });
    const cityWeather = await getWeather(cities);
    setCurrWeather(cityWeather);
  };
  const showWeather = async (e) => {
    dispatch({
      type: "UPDATE_CITY",
      payload: { city: e.target.value },
    });
    console.log(cities);
    const cityWeather = await getWeather(cities);
    setCurrWeather(cityWeather);
  };
  return (
    <div>
      <label htmlFor="cities"></label>
      <select id="cities" onChange={(e) => showWeather(e)}>
        <option>london</option>
        <option>Jerusalem</option>
        <option>Ashdod</option>
        <option>Denver</option>
        <option>Chicago</option>
      </select>
      <br />
      <br />
      <br />
      <div>city:{cities}</div>
      <div>temperature:{currWeather.main.temp}</div>
      <div>weather:{currWeather.weather[0].description}</div>
    </div>
  );
}
