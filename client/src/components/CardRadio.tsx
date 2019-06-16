import * as React from 'react'

export interface CardRadioProp {
  type: string;
  active: string;
  choose: void;
}

export class CardRadio extends React.Component<CardRadioProp, {}> {
  constructor(props: CardRadioProp) {
    super(props)
  }

  render() {
    const isActive = this.props.active === this.props.type
    const onClick = function () {this.props.choose(this.props.type)}

    return (<div 
      onClick = {onClick.bind(this)}
      className = {`create-card__type-magic ${(isActive) ? 'create-card__type-magic_active' : ''}`}>
      {this.props.type}
    </div>)
  }
}