import React, { useState } from "react";
import axios from "axios"
import CardsPokemons from "./CardsPokemons";
import CardPokemon from "./CardPokemon";
import Loading from "./Loading";
import { API_BASE, getPokemons } from "../api"
import { useAppProvider } from "../context/ContextApp"
import Error from "./Error";
const Home = () => {
    const { loading, setLoading, valuePokemon, setError, error, page, setPage, setTotalPages, pokemons, setPokemons } = useAppProvider();
    const [pokemon, setPokemon] = useState(null);
    React.useEffect(() => {
        setLoading(true)
        getDetailsPokemons();
        setLoading(false)
    }, [valuePokemon]);
    async function getDetailsPokemons() {
        await valuePokemon && valuePokemon.map((pokemon) => {
            axios.get(`${API_BASE}pokemon/${pokemon}`).then((resp) => setPokemon(resp.data)).catch(() => setError(true))
        })
    }

    React.useEffect(() => {
        fetchPokemons()
    }, [page])
    const itensPerPage = 10;
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(itensPerPage, itensPerPage * page);
            setPokemons(data.data.results)
            setLoading(false)
        } catch (error) {
            console.log("fetchPokemons error: ", error);
            setLoading(false)
        }
    };
    if (loading) return <Loading />
    if (error) return <Error error="Error 404 [ Pagina não encontrada ]" />
    return (
        <div>
            {pokemon ? (<CardPokemon pokemon={pokemon} />)
                : (
                    <CardsPokemons />
                )}
        </div>

    )


}
export default Home;