import * as React from 'react'
import { Content } from './Content'
import { GeneralInfo } from './GeneralInfo'
import Api, { Card } from '../Api';

export interface GameProp { user: string }

interface MyState { cards: Card[] };

export class Game extends React.Component<GameProp, MyState, {}> {
  
  constructor(props: GameProp) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    Api.getCards()
        .then((result: Card[]) => this.setState({cards: result}))
        .catch(err => console.log(err))
  }

  render() {
    return(
      <div id = 'game'>
        <Content cards = { this.state.cards } />
        <GeneralInfo />
      </div>
    )
  }
  
}