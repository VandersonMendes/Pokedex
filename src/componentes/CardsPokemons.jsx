import React, { useState } from 'react';
import axios from 'axios';
import { getPokemon } from '../api';
import { useAppProvider } from '../context/ContextApp';
import Error from './Error';
import Pagination from './Pagination';
import { createContextState } from 'react-create-context';
const CardsPokemons = () => {
  const {setError, error, setLoading, loading, page, pokemons} = useAppProvider()
  const [pokemon, setPokemon] = useState(null);
  React.useEffect(() =>{
    fetchPokemon()
  },[pokemons])
  const fetchPokemon= async () =>{
    const data = pokemons && pokemons.map((url) => getPokemon(url.url))
    console.log(data)
  }
  return(
    <div >
      <h1></h1>
    <Pagination />
    </div>
  )
}
export default CardsPokemons