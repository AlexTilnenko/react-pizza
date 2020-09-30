import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";
import { connect } from "react-redux";

class App extends React.Component {
	componentDidMount() {
		axios.get("/db.json").then(({ data }) => {
			window.store.dispatch(setPizzas(data.pizzas));
		});
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Route exact path={"/"} render={() => <Home items={this.props.items} />} />
				<Route path={"/cart"} component={Cart} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.pizzas.items
	};
};

const mapDispatchToProps = (dispatch) => {
   return {
      setPizzas: (items) => dispatch(setPizzas(items))
   }
}
 
// если названия actionCreators и свойства объекта совпадают
// то можно передать объект с этим значение а Redux сам обернет это в функцию,
// а в последствии и в dispatch
// const mapDispatchToProps = {
// 	setPizzas
// };


export default connect(mapStateToProps, mapDispatchToProps)(App);
