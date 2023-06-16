import React from 'react'
import HeaderImg from "../assets/img/pokeapi_256.png";
import Search from './Search';
import styles from "../assets/css/Header.module.css"
import { useAppProvider } from "./context/ContextApp"
const Header = ({filteredPokemon}) => {
  const {loading} = useAppProvider()
  return (
    <div className={styles.header}>
        <a href="/"><img src={HeaderImg} alt="" /></a>
        <Search filteredPokemon={filteredPokemon}></Search>
    </div>
  )
}

export default Header