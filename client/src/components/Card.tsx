/// <reference path="../Types.ts" />

import * as React from 'react'

export interface CardProp {
  card?: Types.Card;
  deleteCardFromFiled: void;
}

export class Card extends React.Component<CardProp, {}> {
  render() {
    const rusTranslation = function (typeMagic: string) {
      if (typeMagic === 'earth') return 'ЗЕМЛЯ'
      if (typeMagic === 'water') return 'ВОДА'
      if (typeMagic === 'fire') return 'ОГОНЬ'
      if (typeMagic === 'wind') return 'ВОЗДУХ'
      return null
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