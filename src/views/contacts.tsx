import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import ContactList from "components/contact/list";
import { ContactComponent } from "components/contact";

export const ContactsView: React.SFC<{}> = (props) =>
    <div className="view">
        <div className="focus master">
            <div className="toolbar">
                <h2>Contacts</h2>
            </div>
            <div className="content">
                <ContactList/>
            </div>
        </div>
        <div className="detail">
            <div className="content">
                <ContactComponent contact={{
                    name: {
                        given: "Luke",
                        family: "Harris"
                    },
                    email: "luke@test.com",
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
