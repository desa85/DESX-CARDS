import * as React from 'react'

export class ControlSection extends React.Component {
  render(){
    return(
      <div className = 'control-section'>
        <button className = 'control-section__button'>СОЗДАТЬ</button>
        <button className = 'control-section__button'>ОБНОВИТЬ</button>
      </div>
    )
  }
}