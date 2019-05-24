/// <reference path="../Types" />

import * as React from 'react'
import { Content } from './Content'
import { BlockInfo } from './BlockInfo'
import Api from '../Api';

export interface GameProp { user: string }

interface MyState { cards: Types.Card[] };

export class Game extends React.Component<GameProp, MyState, {}> {
  
  constructor(props: GameProp) {
    super(props)
    this.state = {
      cards: []
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
        <Content cards = { this.state.cards } />
        <BlockInfo />
      </div>
    )
  }
  
}