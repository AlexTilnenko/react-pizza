import {Pizza} from '../actions/types'
import {SET_LOADED, SET_PIZZAS, PizzasActionTypes} from '../actions/types'

type PizzaStateType = {
   items: Array<Pizza>,
   isLoaded: boolean,
}

const initialState: PizzaStateType = {
	items: [],
	isLoaded: false
};

const pizzasReducer = (state = initialState, action: PizzasActionTypes): PizzaStateType => {
	switch (action.type) {
		case SET_PIZZAS:
			return {
				...state,
				items: action.payload,
				isLoaded: true
			};
		case SET_LOADED:
			return {
				...state,
            isLoaded: action.payload
			};
		default:
			return state;
	}
};

export default pizzasReducer;
