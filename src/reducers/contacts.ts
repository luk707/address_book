import { Action } from 'redux';

import { Contact } from '../models/Contact';

// Action type definition.
export interface ContactsAction extends Action {
    payload?: Contact;
    index?: number;
}

// Type definitions for the state of the contacts reducer.
export interface ContactsState {
    contacts: Contact[];
    index: number;
}

export default (state: ContactsState = {contacts: [], index: 0}, action: ContactsAction): {contacts: Contact[], index: number} => {
    switch (action.type) {
        // Adds new contact to state and increments index.
        case 'ADD_CONTACT':
            return action.payload === undefined ? state : {
                contacts: [
                    {
                        ...action.payload,
                        index: state.index
                    },
                    ...state.contacts
                ],
                index: state.index + 1
            }
        // Removes contact from state based upon index.
        case 'REMOVE_CONTACT':
            return {
                contacts: action.index === undefined ? state : state.contacts.filter((contact, index) => index != action.index),
                ...state
            }
        // For any other action return the current state.
        default:
            return state;
    }
}
