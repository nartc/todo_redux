import { select } from '@angular-redux/store/lib/src/decorators/select';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { IAppState } from '../store/IAppState';

@Injectable()
export class TodoService {
  static ADD_TODO = 'ADD_TODO';
  static REMOVE_TODO = 'REMOVE_TODO';
  static TOGGLE_TODO = 'TOGGLE_TODO';
  static CLEAR_TODOS = 'CLEAR_TODOS';
  static GET_TODOS = 'GET_TODOS';

  @select() todos;

  constructor(private _ngRedux: NgRedux<IAppState>) { }

  addTodo(title) {
    // tslint:disable-next-line:curly
    if (!title) return;

    this._ngRedux.dispatch({type: TodoService.ADD_TODO, payload: {title: title}});
  }

  toggleTodo(todo) {
    this._ngRedux.dispatch({type: TodoService.TOGGLE_TODO, payload: {id: todo.id}});
  }

  removeTodo(todo) {
    this._ngRedux.dispatch({type: TodoService.REMOVE_TODO, payload: {id: todo.id}});
  }

  clearTodos() {
    this._ngRedux.dispatch({type: TodoService.CLEAR_TODOS, payload: {}});
  }

  saveTodos(todos, lastUpdate) {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('lastUpdate', JSON.stringify(lastUpdate));
  }

  getTodos() {
    this._ngRedux.dispatch({type: TodoService.GET_TODOS, payload: {
      todos: JSON.parse(localStorage.getItem('todos')),
      lastUpdate: JSON.parse(localStorage.getItem('lastUpdate'))
    }});
  }

}
