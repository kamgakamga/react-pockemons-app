import React, {FunctionComponent,useState, useEffect} from 'react';
import POKEMONS  from "../models/mocks-pokemon";
import Pokemon from '../models/pokemon';
import PokemonCard from '../composants/pokemon-card';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../composants/pokemon-form';


type Params = {
        id: string
 };
const PokemonEdit : FunctionComponent<RouteComponentProps<Params>> = ({match}) =>{
const [pokemon, setPokemon] = useState<Pokemon|null>(null);

useEffect(() => {
        POKEMONS.forEach(pokemon => {
            if( match.params.id === pokemon.id.toString()){
                    setPokemon(pokemon);
            }
    })}, [match.params.id]);


 return (
     <div>
        {
          pokemon ? (
                <div className='row'>
                        <h2 className='header center'>Editer {pokemon.name}</h2>
                        <PokemonForm pokemon={pokemon}></PokemonForm>
                </div>
          ):(
         <h4 className='center'>Aucun pokémon à afficher !</h4> 
          )      
        }
     </div>          
 )
}

export default PokemonEdit;