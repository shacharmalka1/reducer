import React, { createContext } from "react";

export const mainContext = createContext<{
  state: Context.UserState[];
  dispatch?: React.Dispatch<Context.UserAction>;
}>({ state: [{ fName: "s", lName: "s", age: 23 }] });
