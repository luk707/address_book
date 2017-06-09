import { Action } from "redux";
import { Contact } from "models/contact";

// Action labels
const ADD_CONTACT = "ADD_CONTACT";
const REMOVE_CONTACT = "ADD_CONTACT";
const REORDER_CONTACT = "ADD_CONTACT";

export const CONTACTS_ACTIONS = {
    ADD_CONTACT,
    REMOVE_CONTACT,
    REORDER_CONTACT
};

export const AddContact = (contact: Contact) => {
    return { type: ADD_CONTACT, contact } as Action;
}

export const RemoveContact = (contactIndex: number) => {
    return { type: REMOVE_CONTACT, contactIndex } as Action;
}

export const ReorderContact = (contactIndex: number, newIndex: number) => {
    return { type: REMOVE_CONTACT, contactIndex, newIndex } as Action;
}
