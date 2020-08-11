import React , {Component, createContext} from 'react';

export const PokemonContext = createContext();

class PokemonContextProvider extends Component{
    constructor(props) {
        super(props);
        //poknumber : Math.floor(Math.random() * (100 - 1) + 1)
        this.state = { number : 1 }; 
    }
    render(){
        console.log("this.statepoknumber", this.state)
        return(
            <PokemonContext.Provider value={{test:1}}>
                {this.props.children}
            </PokemonContext.Provider>
        )
    }
}

export default PokemonContextProvider