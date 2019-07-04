import * as React from 'react'

export interface CardRadioProp {
  isActive: boolean;
  onClick: (a: string) => void;
  value: string;
}

export class CardRadio extends React.Component<CardRadioProp, {}> {
  constructor(props: CardRadioProp) {
    super(props)
  }

  render() {
    const onClick = function () {this.props.onClick(this.props.value)}

    return (<div 
      onClick = {onClick.bind(this)}
      className = {`create-card__type-magic ${(this.props.isActive) ? 'create-card__type-magic_active' : ''}`}>
      {this.props.value}
    </div>)
  }
}