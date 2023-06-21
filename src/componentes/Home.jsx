import React, { useState } from "react";
import CardsPokemons from "./CardsPokemons";
import CardPokemon from "./CardPokemon";
import Loading from "./Loading";
import {getPokemons, getPokemon } from "../api"
import { useAppProvider } from "../context/ContextApp"
import Error from "./Error";
const Home = () => {
    const { loading, setLoading, valuePokemon, setError, error, page, setPokemons } = useAppProvider();
    const [pokemon, setPokemon] = useState(null);
    React.useEffect(() => {
        setLoading(true)
        getPokemonSearch();
        setLoading(false)
    }, [valuePokemon]);

    const getPokemonSearch = async ()=>{
        try{
            const data = await  valuePokemon.map((search) => getPokemon(search)); 
            const result = await Promise.all(data)
            result && result.map((resp) => setPokemon(resp.data))
            setError(false)
        }catch(err){
            setError(true)
        }finally{
            setError(false)
        }
    }
    React.useEffect(() => {
        fetchPokemons()
    }, [page])
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(9, 7 * page);
            const promises= data.data.results.map(async (pokemon) => {
                return await getPokemon(pokemon.name)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
      
            setLoading(false)
        } catch (error) {
            console.log("fetchPokemons error: ", error);
            setLoading(false)
        }
    };
    if (loading) return <Loading />
    if (error) return <Error error="Error 404 [ Pagina não encontrada ]" />
    return (
        <div className="animeLeft">
            {pokemon ? ( <CardPokemon pokemon={pokemon} />)
                : (
                     <CardsPokemons />
                )}
        </div>

    )


}
export default Home;