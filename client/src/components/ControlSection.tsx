import * as React from 'react'

export interface ControlSectionProp {data: object;}

export class ControlSection extends React.Component<ControlSectionProp, {}> {
  render(){
    return(
      <div className = 'control-section'>
        <button className = 'control-section__button'>СОЗДАТЬ</button>
        <button className = 'control-section__button'>ОБНОВИТЬ</button>
      </div>
    )
  }
}