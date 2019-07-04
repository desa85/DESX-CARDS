import * as React from 'react'

export class ControlSection extends React.Component<{route: (routing: string) => void}> {
  render () {
    const onClick = function () {this.props.route('createCard')}

    return (
      <div className = 'control-section'>
        <button onClick = {onClick.bind(this)} className = 'control-section__button'>СОЗДАТЬ</button>
        <button className = 'control-section__button'>ОБНОВИТЬ</button>
      </div>
    )
  }
}
