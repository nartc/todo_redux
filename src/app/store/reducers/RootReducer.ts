import { combineReducers } from 'redux';
import { IAppState } from '../IAppState';
import { TodoReducer } from './TodoReducer';

export const RootReducer = combineReducers<IAppState>({
  todoState: TodoReducer
});
