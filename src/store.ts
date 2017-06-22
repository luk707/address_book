import { createStore, combineReducers } from 'redux';

import { Contact } from './models/Contact';
import ContactsReducer from './reducers/contacts';

export interface State {
    contacts: Contact[];
}

let reducer = combineReducers<State>({
    contacts: ContactsReducer
})

export default createStore<State>(reducer);
