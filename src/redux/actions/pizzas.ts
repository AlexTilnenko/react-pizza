import axios from 'axios'
import {Pizza, PizzasActionTypes, SET_LOADED, SET_PIZZAS} from './types'

const _apibase: string = "https://my-json-server.typicode.com/AlexTilnenko/react-pizza";

export const setLoaded = (isLoaded: boolean): PizzasActionTypes => ({
	type: SET_LOADED,
	payload: isLoaded
});

type SortParamTypes= {
   type: string, 
   order: string,
   category: string
}

export const fetchPizzas = ({type, order, category}: SortParamTypes) => (dispatch: any) => {
   dispatch(setLoaded(false))
	axios
		.get(
			`${_apibase}/pizzas/?${
				category ? `category=${category}&` : ""
			}_sort=${type}&_order=${order}`
		)
		.then(({ data }) => {
			dispatch(setPizzas(data));
		});
};

export const setPizzas = (items: Array<Pizza>): PizzasActionTypes => ({
	type: SET_PIZZAS,
	payload: items
});
