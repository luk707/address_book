import * as React from "react";
import { Contact } from "models/contact";
import { RemoveContact } from "actions/contacts";
import { Component } from "component";

export interface Props {
    editable: boolean
}

export interface State {
    contacts: Contact[];
}

export interface Actions {
    remove: (contactIndex: number) => () => void;
}

export default Component<Props, State, Actions>(
    state => ({
        contacts: state.contacts
    }),
    dispatch => ({
        remove: (contactIndex: number) => () => {
            dispatch(RemoveContact(contactIndex))
        }
    }),
    props =>
        <ul>
            {
                props
                .contacts
                // Sort contacts by last name alphabetically
                .sort(
                    (a, b) =>
                        a.name.family < b.name.family ? -1 :
                        a.name.family > b.name.family ? 1 :
                        0
                )
                // Render contact 
                .map((contact, index) =>
                    <li>
                        <p>Name: {contact.name.given} {contact.name.family}</p>
                        <p>Email: {contact.email}</p>
                        <button onClick={props.remove(index)}>Remove</button>
                    </li>
            )}
        </ul>
);
