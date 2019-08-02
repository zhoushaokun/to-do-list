import React, { Component } from 'react';
import Items from "./Items.jsx";

class Main extends Component {
	render() {
		return (
			<div className="main">
				<input 
					id="toggle-all"
					className="toggle-all"
					type="checkbox"/>
					<label htmlFor="toggle-all"></label>
					<ul className="todo-list">
							{Items}
					</ul>
			</div>
		);
	}
}
export default Main;