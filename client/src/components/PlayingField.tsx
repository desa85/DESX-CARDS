/// <reference path="../Types" />

import * as React from 'react'
import { Card } from './Card'

export interface Prop {cards: Types.Card[]}

export class PlayingField extends React.Component<Prop, {}> {
  render() {
    return(
      <div id = 'playing-field'>
        {this.props.cards
          .map(card => <Card card = { 
            { 
              name: card.name, 
              typeMagic: card.typeMagic, 
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