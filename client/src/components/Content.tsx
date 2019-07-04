/// <reference path="../Types" />

import * as React from 'react'
import { ControlSection } from './ControlSection'
import { PlayingField } from './PlayingField'
import Api from '../Api';

export interface ContentProp {cards: Types.Card[]; route: (routing: string) => void; updateCards: (cards: Types.Card[]) => void}

export class Content extends React.Component<ContentProp, {}> {
  componentWillMount() {
    Api.getCards()
      .then((result: Types.Card[]) => this.props.updateCards(result))
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div id = 'content'>
        <ControlSection route = {this.props.route} />
        <PlayingField deleteCard = {this.props.deleteCard} cards = { this.props.cards } />
      </div>
    )
  }
}