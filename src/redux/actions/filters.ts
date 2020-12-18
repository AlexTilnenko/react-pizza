import {SortByActionPayloadType, FiltersActionTypes, SET_SORT_BY, SET_CATEGORY} from './types'

export const setSortBy = ({ type, order }: SortByActionPayloadType): FiltersActionTypes => ({
	type: SET_SORT_BY,
	payload: { type, order }
});

export const setCategory = (catIndex: number): FiltersActionTypes => ({
	type: SET_CATEGORY,
	payload: catIndex
});
