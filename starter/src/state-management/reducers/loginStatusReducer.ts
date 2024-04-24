interface LogInAction {
  type: "LOGIN";
  user: string;
}

interface LogOutAction {
  type: "LOGOUT";
}

export type AuthAction = LogInAction | LogOutAction;

export const loginStatusReducer = (
  state: string,
  action: AuthAction
): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};
