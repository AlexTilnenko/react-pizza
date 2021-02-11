import { SortParamTypes } from "../../services/pizzasServices";
import { Pizza, PizzasActions, SET_LOADED, SET_PIZZAS, GET_PIZZAS, GetPizzasAction } from "./types";

export const setLoaded = (isLoaded: boolean): PizzasActions => ({
	type: SET_LOADED,
	payload: isLoaded
});

export const getPizzas = ({ type, order, category }: SortParamTypes): GetPizzasAction => {
	return {
		type: GET_PIZZAS,
		payload: {
			type,
			order,
			category
		}
	};
};

export const setPizzas = (items: Array<Pizza>): PizzasActions => ({
	type: SET_PIZZAS,
	payload: items
});
