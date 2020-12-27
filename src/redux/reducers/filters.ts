import * as t from '../actions/types'

type FiltersStateType = {
   sortBy: {
      type: string,
      order: string
   },
	category: Category
}

export type Category = number | null

const initialState: FiltersStateType = {
	sortBy: {
      type: "popular",
      order: 'desc'
	},
	category: null
};

const filtersReducer = (state = initialState, action: any): FiltersStateType => {
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