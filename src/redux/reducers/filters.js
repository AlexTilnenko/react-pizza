const initialState = {
	sortBy: {
      type: "popular",
      order: 'desc'
	},
	category: null
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CATEGORY":
			return {
				...state,
				category: action.payload
			};
		case "SET_SORT_BY":
			return {
				...state,
				sortBy: action.payload
			};
		default:
			return state;
	}
};

export default filtersReducer;