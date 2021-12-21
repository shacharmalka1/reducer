import { useContext, useRef } from "react";
import { mainContext } from "../context/mainContext";
export default function UserForm() {
  const context = useContext(mainContext);
  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);

  function addUser() {
    const firstNameValue = firstNameInput.current?.value;
    const lastNameValue = lastNameInput.current?.value;
    const ageValue = ageInput.current?.value;
    if (context.dispatch) {
      context.dispatch({
        type: "addUser",
        payload: {
          fName: firstNameValue || "s",
          lName: lastNameValue || "s",
          age: Number(ageValue) || 23,
        },
      });
    }
  }
  return (
    <div>
      <input type="text" placeholder="first name" ref={firstNameInput} />
      <input type="text" placeholder="last name" ref={lastNameInput} />
      <input type="number" placeholder="age" ref={ageInput} />
      <button
        onClick={() => {
          addUser();
        }}
      >
        add user
      </button>
    </div>
  );
}
