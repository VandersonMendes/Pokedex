import React, { useState } from 'react';
import styles from "../assets/css/CardsPokemon.module.css";
import axios from 'axios';
import { getPokemon, API_BASE } from '../api';
import { useAppProvider } from '../context/ContextApp';
import Error from './Error';
import Pagination from './Pagination';
const CardsPokemons = () => {
  const {setError, error, setLoading, loading, page, pokemons} = useAppProvider()
  const [pokemon, setPokemon] = useState();
  React.useEffect(() =>{
    fetchPokemon()
  },[page])
  const fetchPokemon= async () =>{
    pokemons && pokemons.map((pokemon) =>  axios.get(pokemon.url).then((resp) =>  setPokemon(resp.data.id)))
  }
console.log(pokemon)
  return(
    <div >
      <h1></h1>
    <Pagination />
    </div>
  )
}
export default CardsPokemons