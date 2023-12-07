import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};


export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: null,
        error: null
      };
    case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            loading: false,
            error: null
          };
    case "LOGIN_FAILED": 
          return {
            user: null,
            loading: null,
            error: action.payload
          };
    case "LOGOUT" :
        return {
            user: null,
            loading: null,
            error: null,
        }
    default:
      return state;
  }
};


export const AuthContextProvider = ({children}) => {
    const [authState, dispatchAuth] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(authState.user));
      }, [authState.user]);
    

    return (
        <AuthContext.Provider value={{
            user: authState.user,
            loading: authState.loading,
            error: authState.error,
            dispatchAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}