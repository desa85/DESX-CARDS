import * as React from 'react'
import { Message } from './Message'

export interface NoticeProp {data: object;}

export class Notice extends React.Component<NoticeProp, {}> {
  render() {
    return(
      <div className = 'notice'>
        <div className = 'notice__info'>
          <p>УВЕДОМЛЕНИЯ</p>
          <p>
          <span>НОВЫХ: 3</span>
          <span>ВСЕГО: 5</span>
          </p>
        </div>
        <div className = 'messages'>
            <div className = 'messages__new'>
              <Message data = { {color: 'green', message: 'Карта :name: создана!'} } />
              <Message data = { {color: 'yellow', message: 'Карта :name: изменена!'} } />
              <Message data = { {color: 'red', message: 'Карта :name: удалена!'} } />
            </div>
            <div className = 'line'></div>
            <div className = 'messages__old'>
              <Message data = { {color: 'blue', message: 'Карта :name: сделан ход!'} } />
              <Message data = { {color: 'green', message: 'Карта :name: создана!'} } />
            </div>
          </div>
      </div>
    )
  }
}