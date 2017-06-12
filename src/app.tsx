import * as React from "react";
import NewContactForm from "forms/newContact";

import MasterDetailView from "components/views/masterDetail";
import Page from "components/views/page";

import { ContactsView } from "views/contacts";

export interface AppComponentProps { }

export const AppComponent: React.SFC<AppComponentProps> = (props) =>
    <ContactsView/>
