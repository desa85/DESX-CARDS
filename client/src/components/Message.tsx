import * as React from 'react'

export interface MessageProp {content: {
  color: string,
  message: string
}}

export class Message extends React.Component<MessageProp, {}> {
  render() {
    return(
      <div className = {`message ${this.props.content.color}`}><p>{this.props.content.message}</p></div>
    )
  }
}