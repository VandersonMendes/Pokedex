import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [valuePokemon, setValuePokemon] = useState(null);
  const [nextPage, setNextPage] = useState(+1)
  const [error, setError] = useState(false);
  return (
    <AppContext.Provider value={{ loading, setLoading, setValuePokemon, valuePokemon, error, setError}}>
      {children}
    </AppContext.Provider>
  );
}
  
export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}


