import * as t from '../actions/types'

type PizzaStateType = {
   items: Array<t.Pizza>,
   isLoaded: boolean,
}

const initialState: PizzaStateType = {
	items: [],
	isLoaded: false
};

const pizzasReducer = (state = initialState, action: t.PizzasActions): PizzaStateType => {
	switch (action.type) {
		case t.SET_PIZZAS:
			return {
				...state,
				items: action.payload,
				isLoaded: true
			};
		case t.SET_LOADED:
			return {
				...state,
            isLoaded: action.payload
			};
		default:
			return state;
	}
};

export default pizzasReducer;
