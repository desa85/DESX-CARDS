import * as React from 'react'
import { ControlSection } from './ControlSection'
import { PlayingField } from './PlayingField'
import { Card } from '../Api'

export interface ContentProp {cards: Card[]}

export class Content extends React.Component<ContentProp, {}> {
  render(){
    return(
      <div id = 'content'>
          <ControlSection />
          <PlayingField cards = { this.props.cards } />
        </div>
    )
  }
}