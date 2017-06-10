import {
    connect,
    MapStateToProps,
    MapDispatchToProps
} from "react-redux";
import { Dispatch } from "redux";
import { Props } from "react";
import { State as StoreState } from "store";

// Wrap a stateless component with typed react bindings

// Generic structure for all app components
export const Component = <Props, State, Actions>(
    mapStateToProps: (state: StoreState) => State,
    mapDispatchToProps: (dispatch: Dispatch<State>) => Actions,
    component: (props: Props & State & Actions) => JSX.Element
) => connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);
