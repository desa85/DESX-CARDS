import * as React from 'react'

export interface NoticeElemProp {content: {
  color: string;
  message: string;
};}

export class NoticeElem extends React.Component<NoticeElemProp, {}> {
  render() {
    return(
      <div className = {`noticeElem ${this.props.content.color}`}><p>{this.props.content.message}</p></div>
    )
  }
}