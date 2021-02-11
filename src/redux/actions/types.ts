export type Pizza = {
	id: number;
	imageUrl: string;
	name: string;
	types: Array<number>;
	sizes: Array<number>;
	price: number;
	category: number;
	rating: number;
};

export const SET_LOADED = "SET_LOADED";
type SetLoadingAction = {
	type: typeof SET_LOADED;
	payload: boolean;
};

export const GET_PIZZAS = "GET_PIZZAS";
export type GetPizzasAction = {
	type: typeof GET_PIZZAS;
	payload: {
		type: string;
		order: string;
		category: number;
	};
};

export const SET_PIZZAS = "SET_PIZZAS";
export type SetPizzasAction = {
	type: typeof SET_PIZZAS;
	payload: Array<Pizza>;
};

export type PizzasActions = SetPizzasAction | SetLoadingAction;

export const SET_SORT_BY = "SET_SORT_BY";
export type SortBy = {
	type: string;
	order: string;
};

export const SET_CATEGORY = "SET_CATEGORY";
type SetSortByAction = {
	type: typeof SET_SORT_BY;
	payload: SortBy;
};

export const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";
type SetCategoryAction = {
	type: typeof SET_CATEGORY;
	payload: number;
};

export type FiltersActions = SetSortByAction | SetCategoryAction;

export const CLEAR_CART = "CLEAR_CART";
type ClearCartAction = {
	type: typeof CLEAR_CART;
};

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
type RemoveCartItemAction = {
	type: typeof REMOVE_CART_ITEM;
	payload: number;
};

export const PLUS_CART_ITEM = "PLUS_CART_ITEM";
type PlusCartItemAction = {
	type: typeof PLUS_CART_ITEM;
	payload: number;
};

export const MINUS_CART_ITEM = "MINUS_CART_ITEM";
type MinusCartItemAction = {
	type: typeof MINUS_CART_ITEM;
	payload: number;
};

export type AddedPizza = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	size: number;
	type: string;
};

type AddPizzaToCartAction = {
	type: typeof ADD_PIZZA_TO_CART;
	payload: AddedPizza;
};

export type CartActions =
	| AddPizzaToCartAction
	| ClearCartAction
	| RemoveCartItemAction
	| PlusCartItemAction
	| MinusCartItemAction;
