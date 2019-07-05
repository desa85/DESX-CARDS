import * as React from 'react'

export class ControlSection extends React.Component<{route: (routeName: string) => void}> {
  render () {
    return (
      <div className = 'control-section'>
        <button onClick = {() => this.props.route('createCard')} className = 'control-section__button'>СОЗДАТЬ</button>
        <button className = 'control-section__button'>ОБНОВИТЬ</button>
      </div>
    )
  }
}
