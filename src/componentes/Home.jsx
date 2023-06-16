import React, { useState } from "react";
import styles from "../assets/css/Home.module.css";
import axios from "axios"
import CardsPokemons from "./CardsPokemons";
import CardPokemon from "./CardPokemon";
import Header from "./Header";
import Loading from "./Loading";
import { API_BASE } from "../api"
import { useAppProvider } from "./context/ContextApp"
import Error from "./Error";
const Home = () => {
    const { loading, setLoading, valuePokemon,setError, error } = useAppProvider();
    const [pokemon, setPokemon] = useState(null);
    const [pokemons, setPokemons] = useState(null);
    React.useEffect(() => {
        getPokemons()
        setLoading(true)
        async function getDetailsPokemons() {
            await valuePokemon && valuePokemon.map((pokemon) => {
                axios.get(`${API_BASE}pokemon/${pokemon}`).then((resp) => setPokemon(resp.data)).catch((err) => setError(true))
            })
        }
        setLoading(false)
        getDetailsPokemons();
    }, [valuePokemon]);
    const getPokemons = () => {
        var endpoits = [];
        for (var i=1; i < 50; i++){
            endpoits.push(`${API_BASE}pokemon/${i}/`)
        }
        axios.all(endpoits.map((endpoit) => axios.get(endpoit))).then((resp)=> setPokemons(resp))
    }
    if (loading) return <Loading />
    if(error) return <Error error="Error 404 [ Pagina não encontrada ]"/>
    return (
        <div>
            {pokemon ? (<CardPokemon pokemon={pokemon} />)
                : (
                    <CardsPokemons pokemons={pokemons} />
                )}
        </div>

    )


}
export default Home;