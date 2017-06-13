import * as React from "react";
import NewContactForm from "forms/newContact";

import MasterDetailView from "components/views/masterDetail";
import Page from "components/views/page";

import { ContactsView } from "views/contacts";
import { AddContactView } from "views/addContact";
import { Route, Redirect } from "react-router";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <div>
        <Redirect exact path="/" to="/c"/>
        <Route exact path="/c/:contact?" component={ContactsView}/>
        <Route path="/new" component={AddContactView}/>
    </div>
    
