import {
    connect,
    MapStateToProps,
    MapDispatchToProps
} from "react-redux";
import { Dispatch } from "redux";
import { Props } from "react";
import { State } from "store";

// Wrap a stateless component with typed react bindings

// Generic structure for all app components
export const Component = <Props, State, Events>(
    mapStateToProps: (state: State) => State,
    mapDispatchToProps: (dispatch: Dispatch<State>) => Events,
    component: (props: Props & State & Events) => JSX.Element
) => connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);
