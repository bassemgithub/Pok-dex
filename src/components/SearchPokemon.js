import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { PokemonContext }  from '../contexts/PokemonContext'

class SearchPokemon extends Component {
    static contexType = PokemonContext;
    /*constructor(props) {
        super(props);
        this.state = { number : 1 }; 
    }*/
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }  
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("handleSubmit",  this.state.number);
        this.setState({
            ...this.state, myNumber : this.state.number
        })
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
        .then(res => {
                console.log("res", res);
                console.log("res sprites ", res.data.sprites)
            }
        )
        console.log("mount")
    }
    render() {
        console.log("this_context:: ",this.context)
        const card_element = (
            <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src={"https://pokeres.bastionbot.org/images/pokemon/"+this.state.myNumber+".png"} /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          )
        return( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" id="number" required placeholder="search pockemon by number" onChange={this.handleChange}/>
                    <Button as="input" type="submit" value="Search" />
                </form>
                {card_element}
            </div>
        )
    }
  }


export default SearchPokemon;