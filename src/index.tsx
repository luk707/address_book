import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store';
import { createHashHistory } from 'history';

let history = createHashHistory();

// Begin rendering the application to the DOM.
ReactDOM.render(
  // The provider needs a configured redux store.
  <Provider store={configureStore(history)}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
