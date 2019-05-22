import * as React from 'react'
import { Content } from './Content'
import { GeneralInfo } from './GeneralInfo'
import Api from '../Api';

export interface GameProp {cards: boolean;}

interface MyState { cards: object[] };

export class Game extends React.Component<GameProp, MyState, {}> {
  
  constructor(props: GameProp) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    Api.getCards()
        .then((result: string) => this.setState({cards: JSON.parse(result)}))
  }

  render() {
    return(
      <div id = 'game'>
        <Content data = { this.state.cards } />
        <GeneralInfo data = { {} } />
      </div>
    )
  }
  
}