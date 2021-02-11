import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as t from "../redux/actions/types";
import { setLoaded, setPizzas } from "../redux/actions/pizzas";
import { fetchPizzas } from "../services/pizzasServices";

function* onFetchPizzas({ payload }: t.GetPizzasAction) {
	yield put(setLoaded(false));
	const { data } = yield call(fetchPizzas, { ...payload });
	yield put(setPizzas(data));
}

function* watchOnFetchPizzas() {
	yield takeEvery(t.GET_PIZZAS, onFetchPizzas);
}

export default function* PizzasSaga() {
	yield all([fork(watchOnFetchPizzas)]);
}
