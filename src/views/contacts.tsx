import * as React from "react";
import ContactList from "components/contact/list";
import { ContactComponent } from "components/contact";
import { Component } from "component";
import Button from "components/button";

export const ContactsView = props =>
    <div className="view">
        <div className="focus master">
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
                <ContactComponent contact={{
                    id: 1,
                    name: {
                        given: "Luke",
                        family: "Harris"
                    },
                    email: "luke@test.com",
                    phone: "+447123456789",
                    address: {
                        postcode: "AB1 2CD",
                        lines: [
                            "123 any road",
                            "anytown"
                        ],
                        city: "anycity",
                        county: "Cambridgeshire",
                        country: "England",
                        location: {
                            longitude: 1,
                            latitude: 1
                        }
                    }
                }}/>
            </div>
        </div>
    </div>
    
