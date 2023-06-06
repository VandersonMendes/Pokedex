import React, { useState } from "react";
import {API_BASE} from "../api";
import styles from "../assets/css/Home.module.css";
import axios from "axios"
import CardPokemon from "./CardPokemon";
const Home = () => {
    const [pokemons, setPokemons] = useState();
    React.useEffect(() =>{
        getPokemons()
    },[])
    const getPokemons = () => {
        axios
        .get(API_BASE + 'pokemon?limit=100&offset=0')
        .then((resp) => setPokemons(resp.data.results))
        .catch((err) => console.log(err))
    }
    
    return(
        <div className={styles.gridPokemon}>
            {pokemons && pokemons.map((pokemon) =>
                <div>
                    <CardPokemon name={pokemon.name} url={pokemon.url} />
                </div>
            )}
        </div>
    )
}

export default Home