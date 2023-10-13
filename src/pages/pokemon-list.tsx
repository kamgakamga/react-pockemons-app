import React, {FunctionComponent,useState, useEffect} from 'react';
import POKEMONS  from "../models/mocks-pokemon";
import Pokemon from '../models/pokemon';
import PokemonCard from '../composants/pokemon-card';

const PokemonList : FunctionComponent = () =>{
const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(()=>{
        setPokemons(POKEMONS); 
 },[])


 return (<div>
                         <h1 className='center'>Pokédex</h1>
                         <div className='container'>
                                <div className='row'>
                                        {pokemons.map((pokemon)=>(
                                          <PokemonCard key={pokemon.id} pokemon={pokemon} />
                                        )
                                        )}
                                </div>
                         </div>
                         <p> Nombre total: {pokemons.length} pokemon{pokemons.length > 1?'s':''} </p>
                </div>
               
        )

}

export default PokemonList;