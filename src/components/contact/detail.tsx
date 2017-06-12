import * as React from "react";
import { Contact } from "models/contact";
import { RemoveContact } from "actions/contacts";
import { Component } from "component";
import Page from "components/views/page";

export interface Props {
    index: number;
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
    props => {
        let contact = props.contacts[props.index];
        return <Page title={contact.name.given}>
            <div>
                <b>Name</b>
                <span style={{float: "right"}}>{contact.name.given} {contact.name.family}</span>
            </div>
            
            {JSON.stringify(props.contacts[props.index])}
            <button onClick={props.remove(props.index)}>Remove</button>
        </Page>
    }
);
