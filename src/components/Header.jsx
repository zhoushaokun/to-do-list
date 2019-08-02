import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>todos</h1>
				<input type="text" className="new-todo"
					placeholder="What needs to be done?"
				/>

			</div>
		);
	}
}

export default  Header;
