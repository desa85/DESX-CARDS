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
    const chooseTypeMagic = (type: string): object => ({choose: () => this.setState({type: type}), type: type})
    const goToGame = () => this.props.route('game')
    const createCard = (name: string, type: string) => {
      const power = Math.round(Math.random() * 200)
      Api.setCard({
        name: name,
        typeMagic: type, 
        power: power
      })
        .then((result: Types.Card[]) => result)
        .catch(err => {console.log(err); this.props.showErrorWindow(err)})
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
          <CardRadio typeMagic = {chooseTypeMagic('earth')} value = 'ЗЕМЛЯ' isActive = {this.state.type} />
          <CardRadio typeMagic = {chooseTypeMagic('water')} value = 'ВОДА' isActive = {this.state.type} />
          <CardRadio typeMagic = {chooseTypeMagic('fire')} value = 'ОГОНЬ' isActive = {this.state.type} />
          <CardRadio typeMagic = {chooseTypeMagic('wind')} value = 'ВОЗДУХ' isActive = {this.state.type} />
        </div>
        <button onClick = {() => createCard(this.state.input, this.state.type)} 
          className = 'create-card__button'>
          СОЗДАТЬ
        </button>
        <button onClick = {goToGame} className = 'create-card__button'>ОТМЕНИТЬ</button>
      </div>
    )
  }
}