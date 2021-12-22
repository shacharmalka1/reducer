import React from "react";
import NavBar from "./NavBar";
import MainState from "../Contexts/mainState";
import Weather from "./Weather";
export default function MainContainer() {
  return (
    <div>
      <MainState>
        <NavBar />
        <Weather />
      </MainState>
    </div>
  );
}
