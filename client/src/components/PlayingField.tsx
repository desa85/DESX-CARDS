/// <reference path="../Types" />

import * as React from 'react'
import { Card } from './Card'

export interface Prop {cards: Types.Card[]; deleteCard: (id: string) => void}

export class PlayingField extends React.Component<Prop, {}> {
  render() {
    const emptySpace = 9 - this.props.cards.length

    return(
      <div id = 'playing-field'>
        {this.props.cards.slice(0, 9)
          .map((card, index) => <Card deleteCard = {this.props.deleteCard} key = {index} card = {card} />)}
        {Array((emptySpace < 0) ? 0 : emptySpace).fill(0).map((item, index) => <Card key = {index + this.props.cards.length} />)} 
      </div>
    )
  }
}