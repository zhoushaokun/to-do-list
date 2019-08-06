import React, { Component } from 'react';
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Constants from "./constants.js";
 
import { BrowserRouter as Router, Route } from "react-router-dom";


class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			noShowing: Constants.ALL_TODOS
		};
	}


	changeNoShowing = (noShowing) => {
		if (noShowing === "") {
			noShowing = Constants.ALL_TODOS;
		}
		this.setState({noShowing});
	}

	render() {
		const { handleChange, add, modify, toggleAll, onToggle } = this.props; 
		const { todos, newTodo, allCompleted } = this.props.state;
		const { noShowing } = this.state;
		const methods = {
			modify,
			toggleAll,
			onToggle,
			changeNoShowing: this.changeNoShowing
		};
		const activeTodos = todos.filter( (todo) => !todo.completed );
		const completedTodos = todos.filter( (todo) => todo.completed ); 
		const allMain = props => <Main todos={ todos } methods={methods} allCompleted={allCompleted} {...props}></Main>;
		const activeMain = props => <Main todos={ activeTodos } methods={methods} allCompleted={allCompleted} {...props}></Main>;
		const completedMain = props => <Main todos={ completedTodos } methods={methods} allCompleted={allCompleted} {...props}></Main>;

		const footer = <Footer todos={ todos } clearCompleted={ this.props.clearCompleted } noShowing={ noShowing }></Footer>;
		return (
			<div className="todoapp">
				<Router>
					<Header handleChange={ handleChange } onKeyDown={add} value={newTodo}></Header>
					<Route exact path="/" render={ allMain }></Route>
					<Route path="/active" render={ activeMain }></Route>
					<Route path="/completed" render={ completedMain }></Route>
					{todos.length > 0 ? footer : null}
				</Router>
			</div>
		);
	}
}
export default TodoApp;
