import * as actionsType from "./actionsType";

export function handleChange (event) {
	return {
		type: actionsType.CHANGE,
		text: event.target.value
	};	
}

export function add (event) {
	return {
		type: actionsType.ADD_ONE,
	};	
}

export function modify (id) {
	return {
		type: actionsType.MODIFY_ONE,
		text: id
	};
}

export function onToggle (id) {
	return {
		type: actionsType.DONE_ONE,
		text: id
	};
}

export function toggleAll () {
	return {
		type: actionsType.DONE_ALL
	};
}

export function clearCompleted () {
	return {
		type: actionsType.CLEAR_COMPLETED
	};
}
