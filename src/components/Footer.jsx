import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Constants from "./constants";

class Footer extends Component {
	render() {
		const { clearCompleted, noShowing } = this.props;
		const { todos } = this.props;
		let num_left = 0;
		todos.forEach( (element, index) => {
			if (!element.completed) {
				num_left ++;
			}
		});

 		return (
			<div className="footer">
				<span className="todo-count">
					<strong>{num_left}</strong> left
				</span>
				<ul className="filters">
					<li>
						<Link to="/" className={noShowing === Constants.ALL_TODOS ? "selected" : ""}>
								All
						</Link>
					</li>
					{' '}
					<li>
						<Link to="/active" className={noShowing === Constants.ACTIVE_TODOS ? "selected" : ""} >
								Active
						</Link>
					</li>
					{' '}
					<li>
						<Link to="/completed" className={noShowing === Constants.COMPLETED_TODOS ? "selected" : ""}>
								Completed
						</Link>
					</li>
				</ul>
				<button
					onClick={ clearCompleted }
					className="clear-completed">
					Clear completed
				</button>
			</div>
		);
	}
}
export default Footer;