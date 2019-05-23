import * as React from 'react'
import { GeneralGameInfo } from './GeneralGameInfo'
import { Notice } from './Notice'

export class GeneralInfo extends React.Component{
  render() {
    return(
      <div id = 'general-info'>
          <GeneralGameInfo/>
          <Notice/>
        </div>
    )
  }
}