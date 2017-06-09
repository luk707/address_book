import * as React from "react";
import { Contact } from "models/contact";
import { Component } from "component";

export interface Props {
    contacts: Contact[];
}

export interface Events { }

export default Component<Props, Events>(
    state => ({
        contacts: state.contacts
    }),
    dispatch => ({
        test: () => dispatch({type: ""})
    }),
    props =>
        <ul>
            {props.contacts.map(contact =>
                <li>
                    <p>Name: {contact.name.given} {contact.name.family}</p>
                    <p>Email: {contact.email}</p>
                </li>
            )}
        </ul>
);
