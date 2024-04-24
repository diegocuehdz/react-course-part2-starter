import React, { ReactNode, useReducer } from "react";
import { loginStatusReducer } from "../reducers/loginStatusReducer";
import { AuthContext } from "../context/authContext";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
