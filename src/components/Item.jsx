import React, { Component } from 'react';

class Item extends Component {

	onDestroy = () => {
		const { modify } = this.props;
		const id = this.props.todo.id;

		modify(id);
	}

	onToggle = () => {
		const { onToggle } = this.props;
		const id = this.props.todo.id;

		onToggle(id);
	}

	render() {
		
 		const { title, completed } = this.props.todo;
 		return (
			<li className={completed ? "completed" : ""}>
				<div className="view">
					<input
						refs="checkbox"
						className="toggle"
						type="checkbox"
						checked={completed}
						onChange={this.onToggle}
					/>
						<label onDoubleClick={this.handleEdit}>
							{title}
						</label>
						<button className="destroy" onClick={this.onDestroy} />
				</div>
				<input
					ref="editField"
					className="edit"
				/>
			</li>
		);
	}
}
export default Item;