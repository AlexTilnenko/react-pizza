import * as t from '../actions/types'

type ItemsType = {
   [key: string]: {
      items: Array<t.AddedPizza>
      totalPrice: number
   }
}

type CartStateType = {
   items: ItemsType,
   totalPrice: number,
   totalCount: number,
}

const initialState: CartStateType = {
	items: {},
	totalPrice: 0,
	totalCount: 0
};

const getAllPizzas = (newItems: object) => {
	// Достаем из объекта newItems по ключу items массивы пицц
	const itemsArr = Object.values(newItems).map((obj) => obj.items);
	// объединяем все массивы в один
	return [].concat.apply([], itemsArr);
};

const getTotalPrice = (arr: any) => arr.reduce((sum: number, obj: {price: number}) => obj.price + sum, 0);

const cartReducer = (state = initialState, action: t.CartActions): CartStateType => {
	switch (action.type) {
		case t.ADD_PIZZA_TO_CART:
			// проверяем есть ли в items по ключу [id] объекты, если нету то возвращаем новый
			// если есть то берем все старые объекты и добавляем новый объект
			const currentPizzasItems = state.items[action.payload.id]
				? [...state.items[action.payload.id].items, action.payload]
				: [action.payload];

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzasItems,
					totalPrice: getTotalPrice(currentPizzasItems)
				}
			};
			const allPizzas = getAllPizzas(newItems);
			const totalPrice = getTotalPrice(allPizzas);

			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice
			};

		case t.REMOVE_CART_ITEM: {
			const newItems = {
				...state.items
			};
			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];

			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount
			};
		}

		case t.CLEAR_CART:
			return initialState;

		case t.PLUS_CART_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0]
         ];
         
         const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems)
				}
			};
			const allPizzas = getAllPizzas(newItems);
			const totalPrice = getTotalPrice(allPizzas);
			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice
			};
		}

		case t.MINUS_CART_ITEM: {
			const oldObjItems = state.items[action.payload].items;
         const newObjItems = oldObjItems.length > 1 ? oldObjItems.slice(1) : oldObjItems;
         const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems)
				}
			};
			const allPizzas = getAllPizzas(newItems);
			const totalPrice = getTotalPrice(allPizzas);
			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice
			};
		}

		default:
			return state;
	}
};

export default cartReducer;
