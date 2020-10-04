import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {

	return (
		<div className='wrapper'>
			<Header />
			<Route exact path={"/"} component={Home} />
			<Route path={"/cart"} component={Cart} />
		</div>
	);
}

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.pizzas.items
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setPizzas: (items) => dispatch(setPizzas(items))
// 	};
// };

// если названия actionCreators и свойства объекта совпадают
// то можно передать объект с этим значение а Redux сам обернет это в функцию,
// а в последствии и в dispatch
// const mapDispatchToProps = {
// 	setPizzas
// };

export default App;


