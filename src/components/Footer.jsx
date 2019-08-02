import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<span className="todo-count">
					<strong></strong> left
				</span>
				<ul className="filters">
					<li>
						<a>
								All
						</a>
					</li>
					{' '}
					<li>
						<a>
								Active
						</a>
					</li>
					{' '}
					<li>
						<a>
								Completed
						</a>
					</li>
				</ul>
				<button
					className="clear-completed">
					Clear completed
				</button>
			</div>
		);
	}
}
export default Footer;