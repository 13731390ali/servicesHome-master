import React, { createContext, useState } from 'react';


const StateContext = createContext({
})
export { StateContext }



export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const value = {
    activeMenu,
    setActiveMenu,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};