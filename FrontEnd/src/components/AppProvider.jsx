import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [wishLength, setWishLength] = useState(3);

  return (
    <AppContext.Provider value={{ wishLength, setWishLength }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
