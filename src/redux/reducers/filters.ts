import * as t from "../actions/types";

type FiltersStateType = {
	sortBy: {
		type: string;
		order: string;
	};
	category: number;
};

const initialState: FiltersStateType = {
	sortBy: {
		type: "popular",
		order: "desc"
	},
	category: 0
};

const filtersReducer = (state = initialState, action: t.FiltersActions): FiltersStateType => {
	switch (action.type) {
		case t.SET_CATEGORY:
			return {
				...state,
				category: action.payload
			};
		case t.SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload
			};
		default:
			return state;
	}
};

export default filtersReducer;
