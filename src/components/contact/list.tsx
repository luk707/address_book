import * as React from "react";
import { Contact } from "models/contact";
import { RemoveContact } from "actions/contacts";
import { Component } from "component";
import * as Gravatar from "gravatar";

export interface Props { }

export interface State {
    contacts: Contact[];
}

export interface Actions { }

export default Component<Props, State, Actions>(
    state => ({
        contacts: [
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts,
            ...state.contacts
        ]
    }),
    dispatch => ({}),
    props =>
        <div className="list">
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
                    <div className="item">
                        <img src={Gravatar.url(contact.email, {
                            s: "40",
                            r: "pg",
                            d: "retro"
                        })} alt={contact.name.given}/>
                        <div className="text">
                            
                            <span><b>{contact.name.family}</b>&nbsp;{contact.name.given}</span>
                        </div>
                    </div>
            )}
        </div>
);
