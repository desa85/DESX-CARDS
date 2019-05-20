import * as React from 'react'
import { Content } from './Content'
import { GeneralInfo } from './GeneralInfo'

export interface GameProp {user: string;}

export class Game extends React.Component<GameProp, {}> {
  render() {
    return(
      <div id = 'game'>
        <Content data = { {} } />
        <GeneralInfo data = { {} } />
      </div>
    )
  }
  
}