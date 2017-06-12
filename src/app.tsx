import * as React from "react";
import NewContactForm from "forms/newContact";

import MasterDetailView from "components/views/masterDetail";
import Page from "components/views/page";

import { ContactsView } from "views/contacts";
import { AddContactView } from "views/addContact";
import { Route } from "react-router";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <div>
        <Route exact path="/" component={ContactsView}/>
        <Route path="/new" component={AddContactView}/>
    </div>
    
