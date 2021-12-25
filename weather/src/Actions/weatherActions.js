import axios from 'axios';

export const changeCity = (city) => {
  return (dispatch) => {
    return dispatch(getWeatherByCity(city));
  };
};

export const getWeatherByCity = (city) => {
  const apiid = 'fa5e939c1cee10ab9e2651a73c68ade5';
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiid}`
      )
      .then((response) => {
        dispatch({
          type: 'CHANGE_CITY',
          payload: { city: response.data.name },
        });
        dispatch({
          type: 'CHANGE_WEATHER',
          payload: { weather: response.data.main },
        });
      })
      .catch((err) => console.log('not valid city', err));
  };
};