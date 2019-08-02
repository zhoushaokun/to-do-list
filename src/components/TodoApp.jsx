import React, { Component } from 'react';
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Constants from "./constants.js";

class TodoApp extends Component {
	constructor() {
	  super();
	  debugger;
	  this.state = {
	    noShowing: Constants.ALL_TODOS,
	    editing: null,
	    newTode: ""
	  };
	}

	handleChange(event) {
	  this.setState({newTodo: event.target.value});
	}

	handleNewTodoKeyDown(event) {
	  // if (event.keyCode !== ENTER_KEY) {
	  //     return;
	  //   }

	    event.preventDefault();

	    var val = this.state.newTodo.trim();

	    if (val) {
	      this.props.model.addTodo(val);
	      this.setState({newTodo: ''});
	    }
	}
	render() {
		return (
			<div className="todoapp">
				<Header></Header>
				<Main></Main>
				<Footer></Footer>
			</div>
		);
	}
}
export default TodoApp;
