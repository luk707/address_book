import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Contact } from "models/contact";
import ContactReducer from "reducers/contacts";
import { reducer as formReducer, FormState } from "redux-form";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { History } from "history";
import { autoRehydrate } from "redux-persist";

export interface State {
    contacts: Contact[];
    form?: FormState;
}

export default (history: History) =>
    createStore(
        combineReducers({
            contacts: ContactReducer,
            form: formReducer
        }),
        undefined,
        compose(
            applyMiddleware(routerMiddleware(history)),
            autoRehydrate()
        )
    );


