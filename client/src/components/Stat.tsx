import * as React from 'react'
import { StatElem } from './StatElem'

export class Stat extends React.Component {
  render () {
    return (
      <div id = 'general-game-info'>
        <StatElem info = {{ definition: 'КАРТ', value: 12 }} />
        <StatElem info = {{ definition: 'ВЕТЕР', value: 40 }} />
        <StatElem info = {{ definition: 'ОГОНЬ', value: 100 }} />
        <StatElem info = {{ definition: 'ВСЕГО', value: 12 }} />
        <StatElem info = {{ definition: 'ВОДА', value: 50 }} />
        <StatElem info = {{ definition: 'ЗЕМЛЯ', value: 30 }} />
      </div>
    )
  }
}
