import React, {FunctionComponent,useState, useEffect} from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../composants/pokemon-card';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';
import PokemonSearch from '../composants/pokemon-search';


const PokemonList : FunctionComponent = () =>{

const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
        PokemonService.getAllPokemons().then(pokemons => setPokemons(pokemons));
},[]);


 return (<div>
                         <h1 className='center'>Pokédex</h1>
                         <div className='container'>
                                <div className='row'>
                                        <PokemonSearch></PokemonSearch>
                                        {pokemons.map((pokemon)=>(
                                          <PokemonCard key={pokemon.id} pokemon={pokemon} />
                                        )
                                        )}
                                </div>
                                <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3'
                                 style={{position:'fixed', bottom:'25px', right:'25px'}}
                                 to='/pokemon/add'
                                >
                                  <i className='material-icons'>add</i>
                                </Link>
                         </div>
                         <p> Nombre total: {pokemons.length} pokemon{pokemons.length > 1?'s':''} </p>
                </div>
               
        )

}

export default PokemonList;