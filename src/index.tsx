import * as React from "react";
import { render } from "react-dom";

import { AppComponent } from "app";

// Render app to dom
render(
    <AppComponent/>,
    document.getElementById("app")
);
