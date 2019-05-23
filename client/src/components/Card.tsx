import * as React from 'react'
import { Card as CardStyle } from '../Api'

export interface CardProp {
  card?: CardStyle
}

export class Card extends React.Component<CardProp, {}> {
  render() {
    return(
      this.props.card ?
      <div className = 'card card_active'>
        <div className = 'card__name'>{this.props.card.name}</div>
        <div className = 'card__info'>
        <p>{this.props.card.typemagic}</p>
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