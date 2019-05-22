import * as React from 'react'
import { Card } from './Card'

export interface PlayingFieldProp {data: [{name: string, typemagic: string, power: number}];}

export class PlayingField extends React.Component<PlayingFieldProp, {}> {
  render() {
    return(
      <div id = 'playing-field'>
        {this.props.data
          .map(card => <Card data = { 
            {
              isActive: true, 
              name: card.name, 
              typeMagic: card.typemagic, 
              power: card.power
            } 
          } />)}
        {Array(9 - this.props.data.length)
          .fill(0)
          .map(item => <Card data = { {isActive: false} } />)} 
      </div>
    )
  }
}