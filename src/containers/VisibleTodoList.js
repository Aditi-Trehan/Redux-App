import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const  getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}
 
const mapStateToProps =  (state,ownProps)=>{ 
    console.log(state, 'state')
    return {
        todos: getVisibleTodos(state.todos, ownProps.filter)
    }
}

const mapDispatchToProps = dispatch => { 
return{
    toggleTodo: id => dispatch(toggleTodo(id))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)