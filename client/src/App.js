import React, { Component } from 'react';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

class App extends Component {
  state = { cards: [], editing: null }

  componentDidMount() {
    //Card make a call to our rails server to get Items
  }

  addCard = (front, back) => {
    //Card make api call to rails server to add item
    //Card update state
    const {cards} = this.state;
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ cards: [...cards, { id, front, back}] });
  }

  updateCard = (id) => {
    //Card make api call to update Card
    //Card update state
    let cards = this.state.cards.map( t => {
      if (t.id === id)
        return { ...t, complete: !t.complete }
      return t;
    });
  
    this.setState({ cards });
  }

  deleteCard = (id) => {
    //Card make api call to delete Card
    //Card remove it from state
    const {cards} = this.state;
    this.setState({ cards: cards.filter( t => t.id !== id )})

  }

  toggleEdit = (id = null) => {
    const {cards} = this.state
    const editing = cards.find(c => c.id === id )
    this.setState(editing)
  }

  render() {
    return (
      <div className="container">
        <CardForm addCard={this.addCard} />
        <CardList
          cards={this.state.cards}
          updateCard={this.updateCard}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;