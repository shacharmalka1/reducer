const initialState = '';

const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_WEATHER':
      return payload.weather.temp;
    default:
      return state;
  }
};

export default weatherReducer;