/// <reference path="../Types.ts" />

import * as React from 'react'
import { CardRadio } from './CardRadio'
import Api from '../Api'

interface CreateCardProp { type: string; input: string; route: (type: string) => void }

export class CreateCard extends React.Component<CreateCardProp> {
  constructor (props: CreateCardProp) {
    super(props)
    this.state = {
      type: this.props.type,
      input: ''
    }
  }

  render() {
    const chooseTypeMagic = (type: string): void => this.setState( {typeIs: type} )
    const goToGame = () => this.props.route('game')
    const createCard = (name: string, type: string) => {
      const power = Math.round(Math.random() * 200)
      Api.setCard({
        name: name,
        typeMagic: type, 
        power: power
      })
        .then((result: Types.Card[]) => result)
        .catch(err => console.log(err))
      goToGame()
    }

    return (
      <div className = 'create-card'>
        <div className = 'create-card__name-card'>
          <input 
            value = {this.state.input}
            onChange = {e => this.setState({input: e.target.value})} 
            className = 'create-card__input' 
            placeholder = 'Название Новой Карты' 
          />
        </div>
        <div className = 'create-card__choose-magic'>
          <CardRadio onClick = {chooseTypeMagic} value = 'earth' isActive = {this.state.typeIs === 'earth'} />
          <CardRadio onClick = {chooseTypeMagic} value = 'water' isActive = {this.state.typeIs === 'water'} />
          <CardRadio onClick = {chooseTypeMagic} value = 'fire' isActive = {this.state.typeIs === 'fire'} />
          <CardRadio onClick = {chooseTypeMagic} value = 'wind' isActive = {this.state.typeIs === 'wind'} />
        </div>
        <button onClick = {() => createCard(this.state.input, this.state.typeIs)} 
          className = 'create-card__button'>
          СОЗДАТЬ
        </button>
        <button onClick = {goToGame} className = 'create-card__button'>ОТМЕНИТЬ</button>
      </div>
    )
  }
}