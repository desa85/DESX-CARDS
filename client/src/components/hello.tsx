import * as React from 'react'

export interface AppProps {param: number;}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div id = 'game'>
        <div id = 'content'>
          <div className = 'control-section'>
          <button className = 'control-section__button'>СОЗДАТЬ</button>
          <button className = 'control-section__button'>ОБНОВИТЬ</button>
          </div>
          <div id = 'playing-field'>
          <div className = 'card card_active'>
            <div className = 'card__name'>АНТАРАС</div>
            <div className = 'card__info'>
            <p>ЗЕМЛЯ</p>
            <p>60</p>
            </div>
            <button>DEL</button>
            <button>EDIT</button>
          </div>
          <div className = 'card card_active'>
            <div className = 'card__name'>СОНИК</div>
            <div className = 'card__info'>
            <p>ВОДА</p>
            <p>55</p>
            </div>
            <button>DEL</button>
            <button>EDIT</button>
          </div>
          <div className = 'card card_active'>
            <div className = 'card__name'>ГЛЫБА</div>
            <div className = 'card__info'>
            <p>ЗЕМЛЯ</p>
            <p>30</p>
            </div>
            <button>DEL</button>
            <button>EDIT</button>
          </div>
          <div className = 'card card_active'>
            <div className = 'card__name'>ХЬЮГА</div>
            <div className = 'card__info'>
            <p>ВЕТЕР</p>
            <p>55</p>
            </div>
            <button>DEL</button>
            <button>EDIT</button>
          </div>
          <div className = 'card card_active'>
            <div className = 'card__name'>ВАЛАКАС</div>
            <div className = 'card__info'>
            <p>ОГОНЬ</p>
            <p>70</p>
            </div>
            <button>DEL</button>
            <button>EDIT</button>
          </div>
          <div className = 'card'></div>
          <div className = 'card'></div>
          <div className = 'card'></div>
          <div className = 'card'></div>
          </div>
        </div>
        <div id = 'general-info'>
          <div id = 'general-game-info'>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>КАРТ</p>
            <p>12</p>
            </div>
          </div>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>ВЕТЕР</p>
            <p>40</p>
            </div>
          </div>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>ОГОНЬ</p>
            <p>100</p>
            </div>
          </div>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>ВСЕГО</p>
            <p>12</p>
            </div>
          </div>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>ВОДА</p>
            <p>50</p>
            </div>
          </div>
          <div className = 'cards-info'>
            <div className = 'cards-info__params'>
            <p>ЗЕМЛЯ</p>
            <p>30</p>
            </div>
          </div>
          
          </div>
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
                  <div className = 'message green'><p>Карта :name: создана!</p></div>
                  <div className = 'message yellow'><p>Карта :name: изменена!</p></div>
                  <div className = 'message red'><p>Карта :name: удалена!</p></div>
                </div>
                <div className = 'line'></div>
                <div className = 'messages__old'>
                  <div className = 'message blue'><p>Карта :name: сделан ход!</p></div>
                  <div className = 'message green'><p>Карта :name: создана!</p></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}