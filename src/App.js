import React, {Component} from 'react';
import './App.css';
import SearchPokemon from './components/SearchPokemon';
import Cards from './components/Cards';
import PokemonContextProvider from './contexts/PokemonContext'

class App extends Component {
  render(){
    return (
      <div className="App">
        <PokemonContextProvider>
          <SearchPokemon/>
          <Cards />
        </PokemonContextProvider>
      </div>
    );
  }
}

export default App;
