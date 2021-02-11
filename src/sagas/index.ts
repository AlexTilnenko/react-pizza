import { all, fork } from "redux-saga/effects";
import pizzasSaga from "./pizzasSaga";

export default function* rootSaga() {
	yield all([fork(pizzasSaga)]);
}
