import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
	return (
		<div className='wrapper'>
			<HashRouter basename='/'>
				<Header />
				<Route exact path='/' component={Home} />
				<Route path='/cart' component={Cart} />
			</HashRouter>
		</div>
	);
}

export default App;
