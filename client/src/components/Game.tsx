/// <reference path="../Types.ts" />

import * as React from 'react'
import { Content } from './Content'
import { BlockInfo } from './BlockInfo'
import { CreateCard } from './CreateCard'
import Api from '../Api';

export interface GameProp { user: string }

interface MyState { cards: Types.Card[]; route: string };

export class Game extends React.Component<GameProp, MyState, {}> {
  
  constructor(props: GameProp) {
    super(props)
    this.state = {
      cards: [],
      route: 'game'
    }
  }
  
  render() {
    const route = function (routing: string): void {this.setState( {route: routing} )}
    const updateCards = function (cards: object[]): void {this.setState( {cards: cards} )}
    const deleteCardFromFiled = function (id: string): void {
      this.setState({cards: this.state.cards.filter((card: object) => card.id !== id)})
    }
    const deleteCard = function(id: string): void {
      Api.deleteCard(id)
        .then(() => deleteCardFromFiled.bind(this)(id))
        .catch(err => console.log(err))
    }

    return(
      <div id = 'game'>
        {
          (this.state.route === 'game') && <Content 
            deleteCard = {deleteCard.bind(this)}
            updateCards = {updateCards.bind(this)} 
            route = {route.bind(this)} 
            cards = { this.state.cards } /> ||
          (this.state.route === 'createCard') && <CreateCard route = {route.bind(this)} typeIs = 'earth' /> ||
          false
        } 
        <BlockInfo />
      </div>
    )
  }
  
}