import * as React from 'react'

export interface MessageProp {data: {
  color: string,
  message: string
}}

export class Message extends React.Component<MessageProp, {}> {
  render() {
    return(
      <div className = {`message ${this.props.data.color}`}><p>{this.props.data.message}</p></div>
    )
  }
}