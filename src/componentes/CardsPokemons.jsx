import React, { useState } from 'react';
import styles from "../assets/css/CardsPokemon.module.css";
import axios from 'axios';
import { useAppProvider } from './context/ContextApp';
import Error from './Error';
const CardsPokemons = ({pokemons}) => {
  const {setError, error, setLoading, loading} = useAppProvider()
  const [pokemon, setPokemon] = useState(null)
  React.useEffect(() =>{
    setLoading(true)
    setLoading(false)
    pokemons && pokemons.map((pok) => setPokemon(pok))
  },[]);
console.log(pokemon)
  if(error) return <Error error={'Página não encontrada'} />
  return (
    <section className={styles.pokemon}>
      <div>
        <h1>{}</h1>
      </div>
    </section>
  )
}

export default CardsPokemons