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
export const Component = <Props, Events>(
    mapStateToProps: (state: State) => Props,
    mapDispatchToProps: (dispatch: Dispatch<State>) => Events,
    component: (props: State & Events) => JSX.Element
) => connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);
