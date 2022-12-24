import React, { useState, useContext, createContext, useReducer } from "react";
import authReducer from "./Auth";

const initState = {
  isAuthenticated: false,
  user: null,
  signin: (newUser, callback) => {},
  signout: (callback) => {}
}

const AuthContext = createContext(initState);

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  // let [user, setUser] = useState(null);

  const [{
    isAuthenticated,
    user,
    
  }, dispatch] = useReducer(authReducer, initState);

  const signin = (newUser, callback) => {
    dispatch({
      type: 'signin',
      data: newUser
    });

    callback();
  };

  const signout = (callback) => {
    dispatch({
      type: 'signout'
    });

    callback();
  };

  const value = {
    isAuthenticated,
    user, 
    signin,
    signout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;