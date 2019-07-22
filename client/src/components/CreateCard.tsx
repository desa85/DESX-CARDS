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
    const cardRadio = (typeMagic: string, name: string) => {
      return (<CardRadio 
        onClick = {() => this.setState({type: typeMagic})} 
        value = {name} 
        isActive = {this.state.type === typeMagic} />)
    }
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
          {cardRadio('earth', 'ЗЕМЛЯ')}
          {cardRadio('water', 'ВОДА')}
          {cardRadio('fire', 'ОГОНЬ')}
          {cardRadio('wind', 'ВОЗДУХ')}
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