import axios from 'axios'
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Category } from './../reducers/filters';
import {Pizza, PizzasActions, SET_LOADED, SET_PIZZAS} from './types'

const _apibase: string = "https://my-json-server.typicode.com/AlexTilnenko/react-pizza";

export const setLoaded = (isLoaded: boolean): PizzasActions => ({
	type: SET_LOADED,
	payload: isLoaded
});

type SortParamTypes= {
   type: string, 
   order: string,
   category: Category
}

export const fetchPizzas = ({type, order, category}: SortParamTypes): ThunkAction<void, RootState, unknown, PizzasActions> => async (dispatch) => {
   dispatch(setLoaded(false))
	const data: Array<Pizza> = await axios
		.get(
			`${_apibase}/pizzas/?${
				category ? `category=${category}&` : ""
			}_sort=${type}&_order=${order}`
		).then(resp => resp.data)
   dispatch(setPizzas(data));
};

export const setPizzas = (items: Array<Pizza>): PizzasActions => ({
	type: SET_PIZZAS,
	payload: items
});
