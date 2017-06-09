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

export interface Events {
    remove: (contactIndex: number) => () => void;
}

export default Component<Props, State, Events>(
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
            {props.contacts.map((contact, index) =>
                <li>
                    <p>Name: {contact.name.given} {contact.name.family}</p>
                    <p>Email: {contact.email}</p>
                    <button onClick={props.remove(index)}>Remove</button>
                </li>
            )}
        </ul>
);
