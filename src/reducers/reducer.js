import * as actionsType from '../actions/actionsType';
import Constants from "../components/constants";
import { uuid } from "../utils/tool";

const defaultState = {
	noShowing: Constants.ALL_TODOS,
	editing: null,
	newTodo: "",
	allCompleted: false,
	todos: [],
};

const reducer = (state = defaultState, action = {}) => {
    let { newTodo } = state;
    let todos = [];
    let allCompleted;
    switch (action.type) {
        case actionsType.CHANGE:
      		newTodo = action.text;
            return {
                ...state,
                newTodo
            };
        case actionsType.ADD_ONE:
         	newTodo = newTodo.trim();
         	if (newTodo) {         		
	         	todos = state.todos.slice(0);
				todos.unshift({ id: uuid(), title: newTodo, completed: false });
				return {
					...state,
					todos,
					newTodo: "",
				};  
         	}
		case actionsType.MODIFY_ONE: 
			todos = state.todos.filter( todo => {
				return todo.id !== action.text;
			});
			return {
				...state,
				todos
			};
		case actionsType.DONE_ONE: 
			todos = state.todos.map( todo => {
				if (todo.id === action.text){
					todo.completed = !todo.completed;
				} 
				return todo;
			});

			allCompleted = state.todos.every( todo => {
				return todo.completed;
			});

			return {
				...state,
				todos, 
				allCompleted
			};
		case actionsType.DONE_ALL:
			allCompleted = !state.allCompleted;
			// 有待改进
			todos = state.todos.map( item => {
				item.completed = allCompleted;
				return item;
			});
			return {
				...state,
				allCompleted,
				todos
			};
		case actionsType.CLEAR_COMPLETED:
			todos = state.todos.filter( todo => {
				return !todo.completed;
			});
			return {
				...state,
				todos
			};
        default:
            return state;
    }
};

export default reducer;
