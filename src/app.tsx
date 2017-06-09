import * as React from "react";
import ContactList from "components/contact/list";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <div>
        <h1>Address Book</h1>
        <ContactList contacts={[]}/>
        <pre>
            TODO:
            <ul>
                <li>Add / Remove contacts</li>
                <li>Contact detail view</li>
            </ul>
        </pre>
    </div>
