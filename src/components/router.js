
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={App}></Route>
				<Route path="/active" component={App}></Route>
				<Route path="/completed" component={App}></Route>
			</Router>
		);
	}
}
export default AppRouter;