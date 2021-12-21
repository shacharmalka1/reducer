import { mainContext } from "./context/mainContext";
import { useReducer } from "react";
import App from "./components/App";

export default function Main() {
  const userReducer = (
    state: Context.UserState[],
    { type, payload }: Context.UserAction
  ) => {
    if (type === "addUser") {
      return [...state, payload];
    }
    if (type === "deleteUser") {
      const newState = state.filter(({ lName }) => {
        return lName !== payload.lName;
      });
      return newState;
    }
    if (type === "updateUser") {
      const update = state.map((user) => {
        if (user.lName === payload.lName) {
          return payload;
        }
        return user;
      });
      return update;
    }
    return state;
  };
  const initialState = [
    { fName: "elay", lName: "gelbart", age: 23 },
    { fName: "shachar", lName: "malka", age: 20 },
  ];
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <mainContext.Provider value={{ state, dispatch }}>
      <App />
    </mainContext.Provider>
  );
}
