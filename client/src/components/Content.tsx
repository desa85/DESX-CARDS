/// <reference path="../Types" />

import * as React from 'react'
import { ControlSection } from './ControlSection'
import { PlayingField } from './PlayingField'

export interface ContentProp {cards: Types.Card[]; route: void}

export class Content extends React.Component<ContentProp, {}> {
  render(){
    return(
      <div id = 'content'>
        <ControlSection route = {this.props.route} />
        <PlayingField cards = { this.props.cards } />
      </div>
    )
  }
}