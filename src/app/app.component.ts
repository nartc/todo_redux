import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/IAppState';
import { RootReducer } from './store/reducers/RootReducer';
import { DevToolsExtension } from '@angular-redux/store/lib/src/components/dev-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _devTools: DevToolsExtension
  ) {}

  ngOnInit() {
    const initialState = {} as IAppState;
    const enhancers = [];

    if (this._devTools.isEnabled()) {
      enhancers.push(this._devTools.enhancer());
    }

    this._ngRedux.configureStore(RootReducer, initialState, [], enhancers);
  }
}
