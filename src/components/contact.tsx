import * as React from "react";
import {
    Router,
    Route
} from "react-router";
import ContactList from "components/contact/list";
import { Contact } from "models/contact";
import * as Gravatar from "gravatar";

export const ContactComponent: React.SFC<{contact: Contact}> = (props) =>
    <div className="contact">
        <div className="jumbo">
            <img src={Gravatar.url(props.contact.email, {
                s: "80",
                r: "pg",
                d: "retro"
            })} alt={props.contact.name.given}/>
            <h1>{props.contact.name.given} {props.contact.name.family}</h1>
        </div>
        <span>Email</span>
    </div>
