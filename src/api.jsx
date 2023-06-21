import axios from "axios";
export const API_BASE = 'https://pokeapi.co/api/v2/';
export const getPokemon = async (name) => {
    try {
        const  response = await axios.get(API_BASE+'pokemon/'+name);
        return  response
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getColorPokemon = async (url) => {
    try {
        const  response = await axios.get(url);
        console.log(url)
        return  response
    } catch (error) {
        console.log("error: ", error)
    }
}
export const getPokemons = async (limit, offset) => {
    try {
      const  response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return response;

    } catch (error) {
        console.log("error: ", error)
    }
}


