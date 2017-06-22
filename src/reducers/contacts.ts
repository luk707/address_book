import { Action } from 'redux';

import { Contact } from '../models/Contact';

export interface ContactsAction extends Action {
    payload?: Contact;
    id?: number;
}

export default (state: Contact[] = [
{
    email: 'joe@test.com',
    name: {
    given: 'Joe',
    family: 'Blogs'
    },
    phone: '+447123456789',
    address: {
    postcode: 'ABC 123',
    line1: '1 Test Way',
    city: 'Test City',
    county: 'Test County',
    country: 'Test Country'
    }
},
{
    email: 'jane@test.com',
    name: {
    given: 'Jane',
    family: 'Doe'
    },
    phone: '+447123456789',
    address: {
    postcode: 'ABC 123',
    line1: '1 Test Way',
    city: 'Test City',
    county: 'Test County',
    country: 'Test Country'
    }
},
{
    email: 'bob@test.com',
    name: {
    given: 'Bob',
    family: 'Blogs'
    },
    phone: '+447123456789',
    address: {
    postcode: 'ABC 123',
    line1: '1 Test Way',
    city: 'Test City',
    county: 'Test County',
    country: 'Test Country'
    }
}], action: ContactsAction): Contact[] => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return action.payload === undefined ? state : [
                action.payload,
                ...state
            ];
        case 'REMOVE_CONTACT':
            return action.id === undefined ? state : state.filter((contact, index) => index != action.id)
        default:
            return state;
    }
}
