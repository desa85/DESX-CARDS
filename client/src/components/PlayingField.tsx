import * as React from 'react'
import { Card } from './Card'
import { Card as CardType } from '../Api'

export interface Prop {cards: CardType[]}

export class PlayingField extends React.Component<Prop, {}> {
  render() {
    return(
      <div id = 'playing-field'>
        {this.props.cards
          .map(card => <Card card = { 
            { 
              name: card.name, 
              typemagic: card.typemagic, 
              power: card.power
            } 
          } />)}
        {Array(9 - this.props.cards.length)
          .fill(0)
          .map(item => <Card />)} 
      </div>
    )
  }
}