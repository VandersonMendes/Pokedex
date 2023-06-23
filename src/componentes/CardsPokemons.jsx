import { useAppProvider } from '../context/ContextApp';
import React, { useState } from 'react';
import styles from "../assets/css/CardsPokemons.module.css"
import Pagination from './Pagination';
import Modal from "./Modal"
import {getPokemon } from "../api"
import { useParams } from 'react-router-dom';
const CardsPokemons = () => {
  const { pokemons, setModal, modal} = useAppProvider();
  const [dataPokemon, setPokemonData] =useState(null)
  const {loading, setLoading} = useAppProvider()
  const handleModal = async (pokemon) =>{
    setModal(true)
    const data = await  getPokemon(pokemon); 
    setPokemonData(data.data)

  }
  return (
        <section>
          <ul  className={styles.grid}>
            {pokemons && pokemons.map((pokemon) => (
              <li key={pokemon.data.name} className={styles.card} onClick={() => handleModal(pokemon.data.name)}>
                <span className={styles.id}>#{pokemon.data.id}</span>
                <div className={styles.img}>
                  <img src={pokemon.data.sprites.other.dream_world.front_default} alt={pokemon.data.id} />
                </div>
                <div className={styles.text}>
                  <h1>{pokemon.data.name}</h1>
                  <div className={styles.type}>
                    {pokemon.data.types.length === 2 ? (
                      <div className={styles.typeFlex}>
                        <span>{pokemon.data.types[0].type.name}</span >
                        <span>{pokemon.data.types[1].type.name}</span>
                      </div>
                    ) : (
                      <div className={styles.typeFlex}><span>{pokemon.data.types[0].type.name}</span></div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Pagination />
          <div>
            {modal &&  <Modal data={dataPokemon}/> }
           
          </div>    

        </section>
  )
}
export default CardsPokemons