import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [valuePokemon, setValuePokemon] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState(null)
  return (
    <AppContext.Provider value={{ loading, setLoading, setValuePokemon, valuePokemon, error, setError, page, setPage, totalPages, setTotalPages, pokemons, setPokemons,}}>
      {children}
    </AppContext.Provider>
  );
}
  
export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}


