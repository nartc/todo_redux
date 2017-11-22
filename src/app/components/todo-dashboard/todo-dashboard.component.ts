import { Subscribe } from '../../utilities/Subscribe';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { select } from '@angular-redux/store/lib/src/decorators/select';
import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { IAppState } from '../../store/IAppState';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  @Subscribe(['todoState'])
  private todoState$: Observable<any>;

  todos: any[];
  lastUpdate: Date;

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _todoService: TodoService) { }

  ngOnInit() {
    this.todoState$.subscribe(data => {
      this.todos = data.todos;
      this.lastUpdate = data.lastUpdate;
    });
    // this._todoService.getTodos();
  }

  clearTodos() {
    this._todoService.clearTodos();
  }

  saveTodos() {
    this._todoService.saveTodos(this.todos, this.lastUpdate);
  }

  getTodos() {
    this._todoService.getTodos();
  }

}
