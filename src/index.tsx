import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { AppComponent } from "app";
import ConfigureStore from "store";

let store = ConfigureStore();

// Render app to dom
render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById("app")
);
