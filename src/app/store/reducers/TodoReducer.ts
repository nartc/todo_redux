import { ITodoState } from '../ITodoState';
import { TodoService } from '../../services/todo.service';
import { tassign } from 'tassign';

const INITIAL_TODO_STATE = { todos: [], lastUpdate: null } as ITodoState;

export function TodoReducer(
  state: ITodoState = INITIAL_TODO_STATE,
  action: any
) {
  switch (action.type) {
    case TodoService.GET_TODOS:
      return tassign(state, action.payload);
    case TodoService.ADD_TODO:
      const newTodo = { id: state.todos.length + 1, title: action.payload.title };
      return tassign(state, {
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
      });
    case TodoService.TOGGLE_TODO:
      const todo = state.todos.find(t => t.id === action.payload.id);
      const index = state.todos.indexOf(todo);

      return tassign(state, {
        todos: [
          ...state.todos.slice(0, index),
          tassign(todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1)
        ],
        lastUpdate: new Date()
      });
    case TodoService.REMOVE_TODO:
      return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.payload.id),
        lastUpdate: new Date()
      });
    case TodoService.CLEAR_TODOS:
      return tassign(state, {
        todos: [],
        lastUpdate: new Date()
      });
    default:
      return state;
  }
}
