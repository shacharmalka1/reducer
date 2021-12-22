import React, { useReducer } from "react";
import MainContext from "./mainContext";
import { mainReducer } from "../Reducers/mainReducers";
import { city } from "../DB/city";
const MainState = (props) => {
  const [cities, dispatch] = useReducer(mainReducer, city);
  return (
    <MainContext.Provider
      value={{
        cities,
        dispatch,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
