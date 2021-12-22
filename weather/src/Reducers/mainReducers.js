export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return action.payload.city;
    case "UPDATE_CITY":
      console.log(action.payload.city);
      return action.payload.city;
    default:
      return state;
  }
};
