import * as React from 'react'

export interface CardInfoProp {info: {
  definition: string,
  value: number
}}

export class CardInfo extends React.Component<CardInfoProp, {}> {
  render() {
    return(
      <div className = 'cards-info'>
        <div className = 'cards-info__params'>
        <p>{this.props.info.definition}</p>
        <p>{this.props.info.value}</p>
        </div>
      </div>
    )
  }
}