import { useContext, useReducer, useState } from "react";
import { loginStatusReducer } from "./reducers/loginStatusReducer";
import { AuthContext } from "./context/authContext";

const LoginStatus = () => {
  //const [user, setUser] = useState("");
  //const [user, dispatch] = useReducer(loginStatusReducer, "");

  const { user, dispatch } = useContext(AuthContext);

  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
        <a
          onClick={() => {
            //setUser("");
            dispatch({ type: "LOGOUT" });
          }}
          href="#"
        >
          Logout
        </a>
      </div>
    );
  return (
    <div>
      <a
        onClick={() => {
          //setUser("mosh.hamedani");
          dispatch({ type: "LOGIN", user: "mosh.hamedani" });
        }}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
