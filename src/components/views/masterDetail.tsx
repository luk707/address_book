import * as React from "react";
import { Component } from "component";

export interface Props {
    focus: boolean;
    master: JSX.Element;
    detail: JSX.Element;
}

export default (props: Props) =>
    // Add focus class if detail view is required
    <div className={[focus ? "focus" : undefined, "master-detail"].join(" ")}>
        <div className={"master"}>
            {props.master}
        </div>
        <div className={"detail"}>
            {props.detail}
        </div>
    </div>
