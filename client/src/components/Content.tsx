import * as React from 'react'
import { ControlSection } from './ControlSection'
import { PlayingField } from './PlayingField'

export interface ContentProp {data: object;}

export class Content extends React.Component<ContentProp, {}> {
  render(){
    return(
      <div id = 'content'>
          <ControlSection data = { {} } />
          <PlayingField data = { {} } />
        </div>
    )
  }
}