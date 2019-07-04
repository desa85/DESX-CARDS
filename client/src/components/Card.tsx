/// <reference path="../Types.ts" />

import * as React from 'react'

export interface CardProp {
  card?: Types.Card;
}

export class Card extends React.Component<CardProp, {}> {
  render() {
    const rusTranslation = function (typeMagic: string) {
      switch (typeMagic) {
        case 'earth': return 'ЗЕМЛЯ'
        case 'water': return 'ВОДА'
        case 'fire': return 'ОГОНЬ'
        case 'wind': return 'ВОЗДУХ'
        default: return null
      }
    } 
    return(
      this.props.card ?
        <div className = 'card card_active'>
          <div className = 'card__name'>{this.props.card.name}</div>
          <div className = 'card__info'>
            <p>{rusTranslation(this.props.card.typeMagic)}</p>
            <p>{this.props.card.power}</p>
          </div>
          <button onClick = {() => this.props.deleteCard(this.props.card.id)}>DEL</button>
          <button>EDIT</button>
        </div>
        :
        <div className = 'card'></div>
    )  
  }
}