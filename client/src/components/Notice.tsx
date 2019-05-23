import * as React from 'react'
import { Message } from './Message'

export class Notice extends React.Component {
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
              <Message content = { {color: 'green', message: 'Карта :name: создана!'} } />
              <Message content = { {color: 'yellow', message: 'Карта :name: изменена!'} } />
              <Message content = { {color: 'red', message: 'Карта :name: удалена!'} } />
            </div>
            <div className = 'line'></div>
            <div className = 'messages__old'>
              <Message content = { {color: 'blue', message: 'Карта :name: сделан ход!'} } />
              <Message content = { {color: 'green', message: 'Карта :name: создана!'} } />
            </div>
          </div>
      </div>
    )
  }
}