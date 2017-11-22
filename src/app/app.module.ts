import { NgReduxModule } from '@angular-redux/store/lib/src/ng-redux.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
