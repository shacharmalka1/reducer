import { useContext } from "react";
import { mainContext } from "../context/mainContext";
import UserLi from "./UserLi";
import UserForm from "./UserForm";
export default function App() {
  const context = useContext(mainContext);
  return (
    <div>
      <ul>
        {context.state.map((user, index) => (
          <UserLi index={index} key={index} />
        ))}
      </ul>
      <UserForm />
    </div>
  );
}
