import * as React from "react";
import { Component } from "component";
import Toolbar from "components/toolbar";

export interface Props {
    title: String;
}

export default (props) =>
    <div className="page">
        <Toolbar title={props.title}/>
        {props.children}
    </div>
