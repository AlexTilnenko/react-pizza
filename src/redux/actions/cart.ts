import * as t from './types'

export const addPizzaToCart = (pizzaObj: t.AddedPizza): t.CartActions => ({
   type: t.ADD_PIZZA_TO_CART,
   payload: pizzaObj
})

export const clearCart = (): t.CartActions => ({
	type: t.CLEAR_CART
});

export const removeCartItem = (id: number): t.CartActions => ({
   type: t.REMOVE_CART_ITEM,
   payload: id
});

export const plusItem = (id: number): t.CartActions => ({
	type: t.PLUS_CART_ITEM,
	payload: id
});

export const minusItem = (id: number): t.CartActions => ({
	type: t.MINUS_CART_ITEM,
	payload: id
});