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
      route: 'createCard'
    }
  }

  componentWillMount() {
    Api.getCards()
      .then((result: Types.Card[]) => this.setState({cards: result}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div id = 'game'>
        {
          (this.state.route === 'game') && <Content cards = { this.state.cards } /> ||
          (this.state.route === 'createCard') && <CreateCard /> ||
          false
        } 
        <BlockInfo />
      </div>
    )
  }
  
}