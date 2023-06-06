import React  from 'react'
import axios from "axios";
import styles from "../assets/css/CardPokemons.module.css"
const CardPokemon = ({name, url}) => {
  const [pokemon, setPokemon] = React.useState();
  React.useEffect(() =>{
    axios
    .get(url)
    .then((resp) => setPokemon(resp.data))
    .catch((err) => console.log(err))
  },[])

  console.log(url)
  return (
    <div className={styles.cards} key={name}>
        <p>{pokemon}</p>
        <img src={pokemon}  alt="" />
    </div>
  )
}

export default CardPokemon