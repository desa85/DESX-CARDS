import * as React from 'react'

export interface CardInfoProp {data: {
  definition: string,
  value: number
}}

export class CardInfo extends React.Component<CardInfoProp, {}> {
  render() {
    return(
      <div className = 'cards-info'>
        <div className = 'cards-info__params'>
        <p>{this.props.data.definition}</p>
        <p>{this.props.data.value}</p>
        </div>
      </div>
    )
  }
}