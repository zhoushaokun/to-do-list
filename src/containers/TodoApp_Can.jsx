import { connect } from 'react-redux';

import * as Actions from '../actions/actions';
import Constants from "../components/constants";

import TodoApp from "../components/TodoApp";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    	handleChange: (event) => {
    		dispatch(Actions.handleChange(event));
    	},
        add: (event) => {
            if (event.keyCode !== Constants.ENTER_KEY) {
            	return;
            }
            event.preventDefault();
            dispatch(Actions.add(event));
        },
        modify: (id) => {
        	dispatch(Actions.modify(id));
        },
        onToggle: (id) => {
        	dispatch(Actions.onToggle(id));
        },
        toggleAll: () => {
        	dispatch(Actions.toggleAll());
        },
        clearCompleted: () => {
        	dispatch(Actions.clearCompleted());
        }
    };
};

const mapStateToProps = ( state ) => ({ state });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
