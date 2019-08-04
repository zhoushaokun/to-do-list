import React, { Component } from 'react';

class Header extends Component {
	render() {
		const { onKeyDown, handleChange, value } = this.props;
		return (
			<div className="header">
				<h1>todos</h1>
				<input type="text" className="new-todo"
					onKeyDown={onKeyDown}
					onChange={handleChange}
					value={value}
					placeholder="What needs to be done?"

				/>

			</div>
		);
	}
}

export default  Header;
