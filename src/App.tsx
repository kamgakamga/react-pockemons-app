import React, {FunctionComponent,useState, useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import  POKEMONS  from "./models/mocks-pokemon";
import Pokemon from "./models/pokemon";
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';




// React.FC  ici on precise a react que notre composant est sous forme de fonction
// FunctionComponent ceci fait exactement la meme chose que la ligne precedante.
const App: FunctionComponent = () => {
//le etats sont mis en place dans un projet react a l'aide des hoocks
// un hook est une simple fonction js
// hook permet de declarer une function d'etat.
// ce hook(fonction) prend en argument une valeur correspondant a un etat initial du composant
// cette valeur peut etre de n'importe quelle type (nombre, chaine, tableau, object,...)
// la fonction(hook) retourne une paire de deux elements l'etat actuel et une fonction pour modifier la valeur de cette etat


const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 useEffect(()=>{
        setPokemons(POKEMONS);
 },[])

        //const name: String = 'React';

       return (   
           <Router>
              <div>
                 {/* {la barre de navigation} */}
                  <nav>
                     <div className='nav-wrapper teal'>
                            <Link to= '/' className='brand-logo center'>Pokémon</Link>
                     </div>
                  </nav>
               </div>
                   {/* {la barre de navigation} */} 
               <Switch>
                 <PrivateRoute exact path='/' component={PokemonList}/> 
                 <Route exact path='/login' component={Login}/> 
                 <PrivateRoute exact path='/pokemons' component={PokemonList}/> 
                 <PrivateRoute exact path='/pokemons/edit/:id' component={PokemonEdit}/> 
                 <PrivateRoute exact path='/pokemon/add' component={PokemonAdd}/> 
                 <PrivateRoute path='/pokemons/:id' component={PokemonDetail}/> 
                 <Route component={PageNotFound}/> 
                </Switch>
           </Router>
            
        )
}

export default App;