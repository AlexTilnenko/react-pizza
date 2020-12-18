import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./scss/app.scss";

ReactDOM.render(
	<Provider store={store}>
      <HashRouter basename='/'>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
