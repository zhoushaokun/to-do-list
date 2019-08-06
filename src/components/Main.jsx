import React, { Component } from 'react';
import Item from "./Item.jsx";

class Main extends Component {

	componentWillMount = () => {
		console.log("componentDidMount", this.props.match.path.split('/').pop());
		const { methods: {changeNoShowing} } = this.props;

		changeNoShowing(this.props.match.path.split('/').pop());
	}

	render() {
		const { todos , allCompleted, methods: { modify, toggleAll, onToggle }} = this.props;

		return (
			<div className="main">
				<input 
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					onClick={toggleAll}
					checked={allCompleted}

				/>
				<label htmlFor="toggle-all"></label>
				<ul className="todo-list">
					{
						todos.map((item) => {
							return (
								<Item key={item.id} todo={item} modify={modify} onToggle={onToggle}/>
							);
						})
					}
				</ul>
			</div>
		);
	}
}
export default Main;