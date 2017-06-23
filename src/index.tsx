import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store';
import { createHashHistory } from 'history';

let history = createHashHistory();

ReactDOM.render(
  <Provider store={configureStore(history)}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
