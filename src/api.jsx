import { func } from "prop-types";

export const API_BASE = 'https://pokeapi.co/api/v2/';


export function PERSONAGENS_GET() {
    return {
      url: API_BASE + 'pokemon?limit=50',
      options: {
        method: 'GET',
      },
    };
  }