export const SET_LOADED = 'SET_LOADED'
export const SET_PIZZAS = 'SET_PIZZAS'
export const SET_SORT_BY = 'SET_SORT_BY'
export const SET_CATEGORY = 'SET_CATEGORY'
export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM'
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM'

export type Pizza = {
   id: number,
   imageUrl: string,
   name: string,
   types: Array<number>,
   sizes: Array<number>,
   price: number,
   category: number,
   rating: number
}

type SetPizzasAction = {
  type: typeof SET_PIZZAS
  payload: Array<Pizza>
}

type SetLoadingAction = {
   type: typeof SET_LOADED
   payload: boolean
}

export type PizzasActionTypes = SetPizzasAction | SetLoadingAction

export type SortByActionPayloadType = {
      type: string,
      order: string
   }

type SetSortByAction = {
   type: typeof SET_SORT_BY
   payload: SortByActionPayloadType
}

type SetCategoryAction = {
   type: typeof SET_CATEGORY
   payload: number
}

export type FiltersActionTypes = SetSortByAction | SetCategoryAction

export type PizzaObjectType = {
   id: number,
   name: string,
   imageUrl: string,
   price: number,
   size: number,
   type: string
}

type AddPizzaToCartAction = {
   type: typeof ADD_PIZZA_TO_CART
   payload: PizzaObjectType
}

type ClearCartAction = {
  type: typeof CLEAR_CART
}

type RemoveCartItemAction = {
   type: typeof REMOVE_CART_ITEM
   payload: number

}

type PlusCartItemAction = {
   type: typeof PLUS_CART_ITEM
   payload: number
}

type MinusCartItemAction = {
   type: typeof MINUS_CART_ITEM
   payload: number
}

export type CartActionTypes = AddPizzaToCartAction | ClearCartAction | RemoveCartItemAction | PlusCartItemAction | MinusCartItemAction

