import * as React from 'react'
import { Stat } from './Stat'
import { Notice } from './Notice'

export class BlockInfo extends React.Component {
  render () {
    return (
      <div id = 'general-info'>
        <Stat/>
        <Notice/>
      </div>
    )
  }
}
