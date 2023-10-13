import React ,{FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import  formateDate  from "../helpers/format-date";
import  formatType  from "../helpers/format-type";
import { useHistory } from 'react-router-dom';


type Props = {
        pokemon : Pokemon,
        borderColor?: string
}

const PokemonCard:FunctionComponent<Props> = ({pokemon, borderColor ='#009688'}) =>{

        const[color, setColor] = useState<string>()
         const history = useHistory();


        const addColor = () =>{
                setColor('red');
        }
        const moveColor = () =>{
                setColor(borderColor);
        } 

        const goToPokemon = (id: number) =>{
                    history.push(`/pokemons/${id}`)
        }

        return (
                <div>
                        <div className='col s6 m4' onClick={() => goToPokemon(pokemon.id)}>
                          <div className='card horizontal' style={{borderColor : color}} onMouseEnter={addColor} onMouseLeave={moveColor}>
                             <div className='card-image'>
                                 <img src={pokemon.picture} alt={pokemon.name} />
                             </div>
                                 <div className='card-stacked'>
                                    <div className='card-content'>
                                        <p>{pokemon.name}</p>
                                        <p><small>{formateDate(pokemon.created)}</small></p>
                                        {pokemon.types.map(type =>(
                                               <p key={type} className={formatType(type)}>{type}</p> 
                                               ))}
                                    </div>
                             </div>
                             </div>
                          </div>
                </div>
        );
}

export default PokemonCard;