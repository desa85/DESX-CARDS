import * as React from 'react'
import { CardInfo } from './CardsInfo'

export interface GeneralGameInfoProp {data: object;}

export class GeneralGameInfo extends React.Component<GeneralGameInfoProp, {}> {
  render() {
    return(
      <div id = 'general-game-info'>
        <CardInfo data = {{definition: "КАРТ", value: 12}} />
        <CardInfo data = {{definition: "ВЕТЕР", value: 40}} />
        <CardInfo data = {{definition: "ОГОНЬ", value: 100}} />
        <CardInfo data = {{definition: "ВСЕГО", value: 12}} />
        <CardInfo data = {{definition: "ВОДА", value: 50}} />
        <CardInfo data = {{definition: "ЗЕМЛЯ", value: 30}} /> 
      </div>
    )
  }
}