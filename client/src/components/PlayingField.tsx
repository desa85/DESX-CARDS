import * as React from 'react'
import { Card } from './Card'

export interface PlayingFieldProp {data: object;}

export class PlayingField extends React.Component<PlayingFieldProp, {}> {
  render() {
    return(
      <div id = 'playing-field'>
        <Card data = { {isActive: true, name: 'АНТАРАС', typeMagic: 'ЗЕМЛЯ', power: 60} } />
        <Card data = { {isActive: true, name: 'СОНИК', typeMagic: 'ВОДА', power: 55} } />
        <Card data = { {isActive: true, name: 'ГЛЫБА', typeMagic: 'ЗЕМЛЯ', power: 30} } />
        <Card data = { {isActive: true, name: 'ХЬЮГА', typeMagic: 'ВЕТЕР', power: 50} } />
        <Card data = { {isActive: true, name: 'ВАЛАКАС', typeMagic: 'ОГОНЬ', power: 70} } />
        <Card data = { {isActive: false} } />
        <Card data = { {isActive: false} } />
        <Card data = { {isActive: false} } />
        <Card data = { {isActive: false} } />  
      </div>
    )
  }
}