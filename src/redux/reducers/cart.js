const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
};

const getAllPizzas = (newItems) => {
	// Достаем из объекта newItems по ключу items массивы пицц
	const itemsArr = Object.values(newItems).map((obj) => obj.items);
	// объединяем все массивы в один
	return [].concat.apply([], itemsArr);
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PIZZA_TO_CART":
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

		case "REMOVE_CART_ITEM": {
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

		case "CLEAR_CART":
			return initialState;

		case "PLUS_CART_ITEM": {
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

		case "MINUS_CART_ITEM": {
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
