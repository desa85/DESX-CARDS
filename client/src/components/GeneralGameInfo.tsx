import * as React from 'react'
import { CardInfo } from './CardsInfo'

export class GeneralGameInfo extends React.Component {
  render() {
    return(
      <div id = 'general-game-info'>
        <CardInfo info = {{definition: "КАРТ", value: 12}} />
        <CardInfo info = {{definition: "ВЕТЕР", value: 40}} />
        <CardInfo info = {{definition: "ОГОНЬ", value: 100}} />
        <CardInfo info = {{definition: "ВСЕГО", value: 12}} />
        <CardInfo info = {{definition: "ВОДА", value: 50}} />
        <CardInfo info = {{definition: "ЗЕМЛЯ", value: 30}} /> 
      </div>
    )
  }
}