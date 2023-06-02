import React, { useState } from "react";
import {PERSONAGENS_GET} from "../api";
import styles from "../assets/css/Home.module.css";
import useFetch from "../Hooks/UseFetch";
import CardPokemon from "./CardPokemon";
const Home = () => {
    const [pokemons, setPokemons] = useState();
    const {loading, error, request, data} = useFetch();
    React.useEffect(() =>{
        const {url, options} = PERSONAGENS_GET()
        request(url, options)

    },[])
    console.log(data)
    return(
        <div className={styles.GridLayout}>
            {data.results && data.results.map((pokemon) =>
                <div>
                    <CardPokemon name={pokemon.name}/>
                </div>
            )}
        </div>
    )
}

export default Home