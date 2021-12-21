import { useContext, useRef } from "react";
import { mainContext } from "../context/mainContext";

export default function UserLi({ index }) {
  const updateName = useRef(null);
  const updateAge = useRef(null);
  const { state, dispatch } = useContext(mainContext);
  return (
    <li>
      {state[index].fName} {state[index].lName} {state[index].age}
      <button
        onClick={() => {
          dispatch({ type: "deleteUser", payload: state[index] });
        }}
      >
        delete
      </button>
      <input type="text" placeholder="first name" ref={updateName} />
      <input type="number" placeholder="age" ref={updateAge} />
      <button
        onClick={() => {
          dispatch({
            type: "updateUser",
            payload: {
              fName: updateName.current.value,
              lName: state[index].lName,
              age: updateAge.current.value,
            },
          });
        }}
      >
        update
      </button>
    </li>
  );
}
