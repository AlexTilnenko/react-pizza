import * as t from './types'

export const setSortBy = ({ type, order }: t.SortBy): t.FiltersActions => ({
	type: t.SET_SORT_BY,
	payload: { type, order }
});

export const setCategory = (catIndex: number): t.FiltersActions => ({
	type: t.SET_CATEGORY,
	payload: catIndex
});
