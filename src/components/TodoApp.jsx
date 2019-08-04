import React, { Component } from 'react';
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Constants from "./constants.js";


class TodoApp extends Component {
	constructor(props) {
	  	super(props);
	  	// debugger;
	  	this.state = {
	    	noShowing: Constants.ALL_TODOS,
	    	editing: null,
	    	newTode: "",
	   	 	todos: [],
	   	 	allCompleted: false
		};
	}

	handleChange = (event) => {
	  this.setState({newTodo: event.target.value});
	}

	handleNewTodoKeyDown = (event) => {
		// console.log(event.keyCode);
		if (event.keyCode !== Constants.ENTER_KEY) {
		    return;
	 	}

	    event.preventDefault();

	    var val = this.state.newTodo.trim();

	    if (val) {
	    	this.add(val);
	      	this.setState({newTodo: ''});
	    }
	}

	uuid = () => {
		/*jshint bitwise:false */
		var i, random;
		var uuid = '';

		for (i = 0; i < 32; i++) {
			random = Math.random() * 16 | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
				.toString(16);
		}

		return uuid;
	}

	// 增加todo
	add = (val) => {
		const todos = this.state.todos;
		todos.unshift({id: this.uuid(), title: val, completed: false});
		this.setState({ todos });
	}

	// 删除todo
	modify = (id) => {
		const todos = this.state.todos.filter( todo => {
			return todo.id !== id;
		});

		this.setState({todos});
	}

	toggleAll = () => {
		const allCompleted = !this.state.allCompleted;
		const { todos } = this.state;

		const new_todos = todos.map( item => {
			item.completed = allCompleted;
			return item;
		});
		this.setState({
			allCompleted,
			todos: new_todos
		});
	}

	onToggle = (id) => {
		const todos = this.state.todos.map( todo => {
			if (todo.id === id){
				todo.completed = !todo.completed;
			} 
			return todo;
		});

		const allCompleted = this.state.todos.every( todo => {
			return todo.completed;
		});

		this.setState({todos, allCompleted});
	}

	render() {
		const { todos, newTodo, allCompleted } = this.state;
		const methods = {
			add: this.add,
			modify: this.modify,
			toggleAll: this.toggleAll,
			onToggle: this.onToggle
		};
		return (
			<div className="todoapp">
				<Header handleChange={this.handleChange} onKeyDown={this.handleNewTodoKeyDown} value={newTodo}></Header>
				<Main todos={ todos } methods={methods} allCompleted={allCompleted}></Main>
				<Footer></Footer>
			</div>
		);
	}
}
export default TodoApp;
