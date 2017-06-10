import * as React from "react";
import ContactList from "components/contact/list";
import NewContactForm from "forms/newContact";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <div>
        <h1>Address Book</h1>
        <ContactList editable={true}/>
        <NewContactForm/>
        <pre>
            TODO:
            <ul>
                <li>Persist state with storage</li>
                <li>Contact detail view</li>
            </ul>
        </pre>
    </div>
