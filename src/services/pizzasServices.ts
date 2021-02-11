import axios from "axios";
import { Pizza } from "../redux/actions/types";

const _apibase: string = "https://my-json-server.typicode.com/AlexTilnenko/react-pizza";

export type SortParamTypes = {
	type: string;
	order: string;
	category: number;
};

type PizzasResponse = Pizza[];

export const fetchPizzas = async ({
	type,
	order,
	category
}: SortParamTypes): Promise<PizzasResponse> => {
	return await axios.get(
		`${_apibase}/pizzas/?${category ? `category=${category}&` : ""}_sort=${type}&_order=${order}`
	);
};
