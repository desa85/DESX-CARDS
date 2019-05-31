/// <reference path="../Types.ts" />

import * as React from 'react'

export interface CardProp {
  card?: Types.Card;
}

export class Card extends React.Component<CardProp, {}> {
  render() {
    return(
      this.props.card ?
        <div className = 'card card_active'>
          <div className = 'card__name'>{this.props.card.name}</div>
          <div className = 'card__info'>
            <p>{this.props.card.typeMagic}</p>
            <p>{this.props.card.power}</p>
          </div>
          <button>DEL</button>
          <button>EDIT</button>
        </div>
        :
        <div className = 'card'></div>
    )  
  }
}