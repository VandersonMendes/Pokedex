import { useAppProvider } from '../context/ContextApp';
import React, { useState } from 'react';
import styles from "../assets/css/CardsPokemons.module.css"
import Pagination from './Pagination';
import Modal from "./Modal"
const CardsPokemons = () => {
  const { pokemons,setModal, modal} = useAppProvider(); 
  function handleModal(event){
    setModal(true)
  }
  return (
        <section>
          <div className={styles.grid}>
            {pokemons && pokemons.map((pokemon) => (
              <div className={styles.card} onClick={handleModal}>
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
                {modal && <Modal name={pokemon.name} />}
              </div>
            ))}
          </div>
          <Pagination />
        </section>
  )
}
export default CardsPokemons