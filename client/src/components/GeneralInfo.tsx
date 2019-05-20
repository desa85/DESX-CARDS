import * as React from 'react'
import { GeneralGameInfo } from './GeneralGameInfo'
import { Notice } from './Notice'

export interface GeneralInfoProp {data: object}

export class GeneralInfo extends React.Component<GeneralInfoProp, {}>{
  render() {
    return(
      <div id = 'general-info'>
          <GeneralGameInfo data = { {} } />
          <Notice data = { {} } />
        </div>
    )
  }
}