/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const logOut = () => {
    setUser("");
  };

  const logIn = (userName) => {
    setUser(userName);
  };

  return (
    <>
      <authContext.Provider value={{ user, logIn, logOut }}>
        {children}
      </authContext.Provider>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
