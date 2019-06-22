/// <reference path="../Types.ts" />

import * as React from 'react'
import { CardRadio } from './CardRadio'
import Api from '../Api'

interface CreateCardProp { typeIs: string; input: string; route: void }

export class CreateCard extends React.Component<CreateCardProp> {
  constructor (props: CreateCardProp) {
    super(props)
    this.state = {
      typeIs: this.props.typeIs,
      input: ''
    }
  }

  render() {
    const chooseTypeMagic = function (type: string): void { this.setState( {typeIs: type} ) }
    const goToGame = function () {this.props.route('game')}
    const createCard = function (name: string, type: string) {
      const power = Math.round(Math.random() * 200)
      Api.setCard({
        name: name,
        typeMagic: type, 
        power: power
      })
        .then((result: Types.Card[]) => console.log(result))
        .catch(err => console.log(err))
      goToGame.bind(this)()
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
          <CardRadio choose = {chooseTypeMagic.bind(this)} ru = 'ЗЕМЛЯ' type = 'earth' active = {this.state.typeIs} />
          <CardRadio choose = {chooseTypeMagic.bind(this)} ru = 'ВОДА' type = 'water' active = {this.state.typeIs} />
          <CardRadio choose = {chooseTypeMagic.bind(this)} ru = 'ОГОНЬ' type = 'fire' active = {this.state.typeIs} />
          <CardRadio choose = {chooseTypeMagic.bind(this)} ru = 'ВОЗДУХ' type = 'wind' active = {this.state.typeIs} />
        </div>
        <button onClick = {() => createCard.bind(this)(this.state.input, this.state.typeIs)} 
          className = 'create-card__button'>
          СОЗДАТЬ/РЕДАКТИРОВАТЬ
        </button>
        <button onClick = {goToGame.bind(this)} className = 'create-card__button'>ОТМЕНИТЬ</button>
      </div>
    )
  }
}