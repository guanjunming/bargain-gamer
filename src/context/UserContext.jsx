import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const cacheUser = localStorage.getItem("user");
    return cacheUser ? JSON.parse(cacheUser) : null;
  });

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const cacheUser = localStorage.getItem("user");
    if (cacheUser) {
      setUser(JSON.parse(cacheUser));
    }
  }, []);

  const value = {
    user,
    loginUser,
    logoutUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
