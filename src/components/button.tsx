import * as React from "react";
import { Component } from "component";
import { push } from "react-router-redux";

export interface Props {
    text: string;
    path: string;
}

export interface State { }

export interface Actions {
    go: (path: string) => () => void;
}

export default Component<Props, State, Actions>(
    state => ({}),
    dispatch => ({
        go: (path: string) => () => {
            dispatch(push(path));
        }
    }),
    props => <button onClick={props.go(props.path)}>{props.text}</button>
)
