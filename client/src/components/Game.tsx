/// <reference path="../Types.ts" />

import * as React from 'react'
import { Content } from './Content'
import { BlockInfo } from './BlockInfo'
import { CreateCard } from './CreateCard'
import { ErrorMessage } from './ErrorMessage'
import Api from '../Api';

export interface GameProp { user: string }

interface GameState { cards: Types.Card[]; routeName: string; isError: boolean; errorMessage: string };

export class Game extends React.Component<GameProp, GameState, {}> {
  
  constructor(props: GameProp) {
    super(props)
    this.state = {
      cards: [],
      routeName: 'game',
      isError: false,
      errorMessage: ''
    }
  }
  
  render() {
    const route = (routeName: string): void => this.setState( {routeName: routeName} )
    const updateCards = (cards: object[]): void => this.setState( {cards: cards} )
    const deleteCardFromFiled = (id: string): void => {
      this.setState({cards: this.state.cards.filter((card: object) => card.id !== id)})
    }
    const showErrorWindow = (message: string) => this.setState( {isError: true, errorMessage: message} )
    const closeErrorWindow = () => this.setState( {isError: false, errorMessage: ''} )
    const deleteCard = (id: string): void => {
      Api.deleteCard(id)
        .then(() => deleteCardFromFiled(id))
        .catch(err => console.log(err))
    }
    const componentByRoute = (routeName: string) => {
      switch (routeName) {
        case 'game': {
          return <Content 
            deleteCard = {deleteCard}
            updateCards = {updateCards} 
            route = {route} 
            cards = { this.state.cards } 
          />
        }
        case 'createCard': return <CreateCard route = {route} type = 'earth' showErrorWindow = {showErrorWindow} />
        default: return null
      }
    }
     

    return(
      <div id = 'game'>
        <ErrorMessage isVisible = {this.state.isError} message = {this.state.errorMessage} closeWindow = {closeErrorWindow} />
        {componentByRoute(this.state.routeName)} 
        <BlockInfo />
      </div>
    )
  }
  
}