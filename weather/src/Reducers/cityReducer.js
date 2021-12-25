const initialState = '';

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_CITY':
      return payload.city;
    default:
      return state;
  }
};

export default cityReducer;