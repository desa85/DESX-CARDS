import * as React from 'react'

export interface StatElemProp {
  info: {
    definition: string,
    value: number
  }
}

export class StatElem extends React.Component<StatElemProp, {}> {
  render() {
    return(
      <div className = 'cards-info'>
        <div className = 'cards-info__params'>
          <p>{this.props.info.definition}</p>
          <p>{this.props.info.value}</p>
        </div>
      </div>
    )
  }
}