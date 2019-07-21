import * as React from 'react'

export interface CardRadioProp {
  isActive: string;
  value: string;
  typeMagic: object;
}

export class CardRadio extends React.Component<CardRadioProp, {}> {
  constructor(props: CardRadioProp) {
    super(props)
  }

  render() {    

    return (<div 
      onClick = {() => this.props.typeMagic.choose()}
      className = {`create-card__type-magic ${(this.props.isActive === this.props.typeMagic.type) ? 'create-card__type-magic_active' : ''}`}>
      {this.props.value}
    </div>)
  }
}