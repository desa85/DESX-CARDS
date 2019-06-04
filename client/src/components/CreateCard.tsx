/// <reference path="../Types.ts" />

import * as React from 'react'

export class CreateCard extends React.Component {
	render() {
		return (
			<div className = 'create-card'>
				<div className = 'create-card__name-card'>
					<input className = 'create-card__input' placeholder = 'Название Новой Карты' />
				</div>
				<div className = 'create-card__choose-magic'>
					<input type = 'radio' name = 'create-card__radio' value = 'earth' id = 'create-card__radio_1' />
					<label for = 'create-card__radio_1' className = 'create-card__type-magic'>ЗЕМЛЯ</label>

					<input type = 'radio' name = 'create-card__radio' value = 'water' id = 'create-card__radio_2' />
					<label for = 'create-card__radio_2' className = 'create-card__type-magic'>ВОДА</label>

					<input type = 'radio' name = 'create-card__radio' value = 'fire' id = 'create-card__radio_3' />
					<label for = 'create-card__radio_3' className = 'create-card__type-magic'>ОГОНЬ</label>

					<input type = 'radio' name = 'create-card__radio' value = 'wind' id = 'create-card__radio_4' />
					<label for = 'create-card__radio_4' className = 'create-card__type-magic'>ВЕТЕР</label>
				</div>
				<button className = 'create-card__button'>СОЗДАТЬ/РЕДАКТИРОВАТЬ</button>
				<button className = 'create-card__button'>ОТМЕНИТЬ</button>
			</div>
		)
	}
}