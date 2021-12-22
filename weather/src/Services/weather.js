import axios from "axios";

export const getWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa5e939c1cee10ab9e2651a73c68ade5`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
