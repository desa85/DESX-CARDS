import * as React from 'react'

export interface CardProp {data: {
  isActive: boolean,
  name?: string,
  typeMagic?: string,
  power?: number
}}

export class Card extends React.Component<CardProp, {}> {
  render() {
    return(
      this.props.data.isActive ?
      <div className = 'card card_active'>
        <div className = 'card__name'>{this.props.data.name}</div>
        <div className = 'card__info'>
        <p>{this.props.data.typeMagic}</p>
        <p>{this.props.data.power}</p>
        </div>
        <button>DEL</button>
        <button>EDIT</button>
      </div>
      :
      <div className = 'card'></div>
    )  
  }
}