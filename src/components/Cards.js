import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import axios from 'axios'
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = { number : 1 , offset:0, pokemons :[] };
      } 
    componentDidMount(){
      const offSet = Math.floor(Math.random() * (100 - 1) + 1);
      console.log("offSet  ", offSet)
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`)
        .then(res => {
              console.log("res sprites ", res.data.results)
              this.setState({pokemons : res.data.results} )
            }
        )
    }

      render() {
        
        const card_element = true? ( 
          this.state.pokemons.map(pokemon => 
          <div className="CardContainer"  key={pokemon.url.split("/")[6]}>
            <Card className="classCard" style={{ width: '18rem' }} key={pokemon.url.split("/")[6]}>
              <Card.Img variant="top" src={"https://pokeres.bastionbot.org/images/pokemon/"+pokemon.url.split("/")[6]+".png"} />
              <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
          )
        ):
        (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
          )
        return( 
            <div>
              <CardDeck className="CardContainer">
                {card_element}
              </CardDeck>
            </div>
        )
    }
  }


export default Cards;