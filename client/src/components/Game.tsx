/// <reference path="../Types.ts" />

import * as React from 'react'
import { Content } from './Content'
import { BlockInfo } from './BlockInfo'
import { CreateCard } from './CreateCard'

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

    return(
      <div id = 'game'>
        {
          (this.state.route === 'game') && <Content updateCards = {updateCards.bind(this)} route = {route.bind(this)} cards = { this.state.cards } /> ||
          (this.state.route === 'createCard') && <CreateCard route = {route.bind(this)} typeIs = 'earth' /> ||
          false
        } 
        <BlockInfo />
      </div>
    )
  }
  
}