import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import ContactsReducer, {ContactsState} from './reducers/contacts';

import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import {persistStore, autoRehydrate} from 'redux-persist';

export interface State {
    contacts: ContactsState;
}

let reducer = combineReducers<State>({
    contacts: ContactsReducer
});

export default (history: History) => {
    let store = createStore<any>(reducer, compose(
        applyMiddleware(routerMiddleware(history)),
        autoRehydrate()
    ));
    persistStore(store);
    return store;
};
