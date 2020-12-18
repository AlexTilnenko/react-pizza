import {PizzaObjectType, CartActionTypes, ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, PLUS_CART_ITEM, MINUS_CART_ITEM} from './types'

export const addPizzaToCart = (pizzaObj: PizzaObjectType): CartActionTypes => ({
   type: ADD_PIZZA_TO_CART,
   payload: pizzaObj
})

export const clearCart = (): CartActionTypes => ({
	type: CLEAR_CART
});

export const removeCartItem = (id: number): CartActionTypes => ({
   type: REMOVE_CART_ITEM,
   payload: id
});

export const plusItem = (id: number): CartActionTypes => ({
	type: PLUS_CART_ITEM,
	payload: id
});

export const minusItem = (id: number): CartActionTypes => ({
	type: MINUS_CART_ITEM,
	payload: id
});