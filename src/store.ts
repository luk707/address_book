import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ContactsReducer, {ContactsState} from './reducers/contacts';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import {persistStore, autoRehydrate} from 'redux-persist';

// Type definitions for the state of the store.
export interface State {
    contacts: ContactsState;
}

let reducer = combineReducers<State>({
    contacts: ContactsReducer
});

// The store requires the browser history middleware in order to
// be able to dipspatch navigation events.
export default (history: History) => {
    let store = createStore<any>(reducer, compose(
        applyMiddleware(routerMiddleware(history)),
        // Automaticcaly rehydrate the store if the storage medium
        // updates.
        autoRehydrate()
    ));
    // Begin persisting the store.
    persistStore(store);
    return store;
};
