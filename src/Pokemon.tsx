import { FunctionComponent, useState} from "react";
import  POKEMONS  from "./models/mocks-pokemon";
import Pokemon from "./models/pokemon";
import React from "react";


const [pokemonList ] = useState<Pokemon[]>(POKEMONS);

const Pokemons:FunctionComponent = () => {
        return (
                <p> Nombre total: {pokemonList.length} pokemon{pokemonList.length > 1?'s':''} </p>
        )
}

export default Pokemons;