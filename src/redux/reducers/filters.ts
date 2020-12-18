import {SET_CATEGORY, SET_SORT_BY} from '../actions/types'

type FiltersStateType = {
   sortBy: {
      type: string,
      order: string
   },
	category: string
}

const initialState: FiltersStateType = {
	sortBy: {
      type: "popular",
      order: 'desc'
	},
	category: ''
};

const filtersReducer = (state = initialState, action: any): FiltersStateType => {
	switch (action.type) {
		case SET_CATEGORY:
			return {
				...state,
				category: action.payload
			};
		case SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload
			};
		default:
			return state;
	}
};

export default filtersReducer;