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

  componentWillMount() {
    Api.getCards()
      .then((result: Types.Card[]) => this.setState({cards: result}))
      .catch(err => console.log(err))
  }

  render() {
    const route = function (routing: string): void {this.setState( {route: routing} )}

    return(
      <div id = 'game'>
        {
          (this.state.route === 'game') && <Content route = {route.bind(this)} cards = { this.state.cards } /> ||
          (this.state.route === 'createCard') && <CreateCard route = {route.bind(this)} typeIs = 'ЗЕМЛЯ' /> ||
          false
        } 
        <BlockInfo />
      </div>
    )
  }
  
}