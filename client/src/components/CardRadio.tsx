import * as React from 'react'

export interface CardRadioProp {
  isActive: boolean;
  value: string;
  onClick: void;
}

export class CardRadio extends React.Component<CardRadioProp, {}> {
  constructor(props: CardRadioProp) {
    super(props)
  }

  render() {    

    return (<div 
      onClick = {() => this.props.onClick()}
      className = {`create-card__type-magic ${(this.props.isActive) ? 'create-card__type-magic_active' : ''}`}>
      {this.props.value}
    </div>)
  }
}