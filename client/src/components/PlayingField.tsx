/// <reference path="../Types" />

import * as React from 'react'
import { Card } from './Card'

export interface Prop {cards: Types.Card[]; deleteCardFromFiled: void}

export class PlayingField extends React.Component<Prop, {}> {
  render() {
    return(
      <div id = 'playing-field'>
        {this.props.cards.map((card, index) => <Card deleteCard = {this.props.deleteCard} key = {index} card = {card} />)}
        {Array(9 - this.props.cards.length).fill(0).map((item, index) => <Card key = {index + this.props.cards.length} />)} 
      </div>
    )
  }
}