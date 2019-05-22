import * as React from 'react'
import { ControlSection } from './ControlSection'
import { PlayingField } from './PlayingField'

export interface ContentProp {data: [{name: string, typemagic: string, power: number}];}

export class Content extends React.Component<ContentProp, {}> {
  render(){
    return(
      <div id = 'content'>
          <ControlSection data = { {} } />
          <PlayingField data = { this.props.data } />
        </div>
    )
  }
}