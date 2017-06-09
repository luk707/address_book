import * as React from "react";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <div>
        <h1>Address Book</h1>
        <pre>
            TODO:
            <ul>
                <li>Contact list</li>
                <li>Add / Remove contacts</li>
                <li>Contact detail view</li>
            </ul>
        </pre>
    </div>
