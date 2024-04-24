import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/loginStatusReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);
