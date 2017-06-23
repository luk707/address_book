import { Action } from 'redux';

import { Contact } from '../models/Contact';

export interface ContactsAction extends Action {
    payload?: Contact;
    index?: number;
}

export interface ContactsState {
    contacts: Contact[];
    index: number;
}

export default (state: ContactsState = {contacts: [], index: 0}, action: ContactsAction): {contacts: Contact[], index: number} => {
    switch (action.type) {
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
        case 'REMOVE_CONTACT':
            return {
                contacts: action.index === undefined ? state : state.contacts.filter((contact, index) => index != action.index),
                ...state
            }
        default:
            return state;
    }
}
