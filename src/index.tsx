import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { AppComponent } from "app";
import ConfigureStore from "store";

import {
    Router,
    Route
} from "react-router";
import { createHashHistory } from "history";

import "styles.scss";

let browserHistory = createHashHistory();

let store = ConfigureStore(browserHistory);

console.log(JSON.stringify(store.getState().contacts[0]));

// Render app to dom
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppComponent}/>
        </Router>
    </Provider>,
    document.getElementById("app")
);
