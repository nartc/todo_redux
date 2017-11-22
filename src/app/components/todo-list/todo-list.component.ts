import { Observable } from 'rxjs/Rx';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { select } from '@angular-redux/store/lib/src/decorators/select';
import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { IAppState } from '../../store/IAppState';
import { Subscribe } from '../../utilities/Subscribe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Subscribe(['todoState', 'todos'])
  private todoState$: Observable<any>;

  todos: any[];

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _todoService: TodoService) { }

  ngOnInit() {
    // console.log(this.todoState);
    // // this.todos = this._todoService.getTodos();
    // console.log(this.todoState);
    this.todoState$.subscribe(data => {
      this.todos = data;
      console.log(data);
    });
    // this._todoService.getTodos();
  }

  addTodo(input) {
    // console.log(input.value);
    this._todoService.addTodo(input.value);
  }

  toggleTodo(todo) {
    this._todoService.toggleTodo(todo);
  }

  removeTodo(todo) {
    this._todoService.removeTodo(todo);
  }

}
