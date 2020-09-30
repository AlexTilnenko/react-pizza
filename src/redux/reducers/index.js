import { combineReducers } from "redux";
import pizzasReducer from "./pizzas";
import filtersReducer from "./filters";
// import cartReducer from "./cart";

const rootReducer = combineReducers({
	pizzas: pizzasReducer,
	filters: filtersReducer
	// cartReducer
});

export default rootReducer;
