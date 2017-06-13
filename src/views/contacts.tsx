import * as React from "react";
import ContactList from "components/contact/list";
import { ContactComponent } from "components/contact";
import { Component } from "component";
import Button from "components/button";

export const ContactsView = props =>
    <div className="view">
        <div className={[
            props.match.params.contact ? undefined : "focus",
            "master"
        ].join(" ")}>
            <div className="toolbar">
                <h2>Contacts</h2>
            </div>
            <div className="content">
                <ContactList/>
            </div>
            <div className="toolbar">
                <Button path="/new" text="Add Contact"/>
            </div>
        </div>
        <div className="detail">
            <div className="content">
                <ContactComponent contact={props.match.params.contact}/>
            </div>
        </div>
    </div>
    
