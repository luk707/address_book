import * as React from "react";
import {
    Router,
    Route
} from "react-router";
import ContactList from "components/contact/list";
import { Contact } from "models/contact";
import { Component } from "component";
import Button from "components/button";

import * as Gravatar from "gravatar";

interface Props {
    contact?: string
}

interface State {
    contactData?: (contact: string) => Contact
}

interface Actions {

}

export const ContactComponent = Component<Props, State, Actions>(
    state => ({
        contactData: (contact: string) => state.contacts.filter(contactData => {
            return contactData.id == contact;
        })[0]
    }),
    dispatch => ({}),
    props => 
        props.contactData(props.contact) ?
        <div className="contact">
            <Button path="/c" text="< Contacts"/>
            <div className="jumbo">
                <img src={Gravatar.url(props.contactData(props.contact).email, {
                    s: "80",
                    r: "pg",
                    d: "retro"
                })} alt={props.contactData(props.contact).name.given}/>
                <h1>{props.contactData(props.contact).name.given} {props.contactData(props.contact).name.family}</h1>
            </div>
            <span>Email</span>
        </div> :
        <div className="contact">
            <span>Select A Contact</span>
        </div>
);