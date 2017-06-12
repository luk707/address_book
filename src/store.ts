import { createStore, combineReducers, applyMiddleware } from "redux";
import { Contact } from "models/contact";
import ContactReducer from "reducers/contacts";
import { reducer as formReducer, FormState } from "redux-form";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { History } from "history";

export interface State {
    contacts: Contact[];
    form?: FormState;
}

export default (history: History) =>
    createStore<State>(
        combineReducers<State>({
            contacts: ContactReducer,
            form: formReducer
        }), {
            contacts: [
                {
                    id: 1,
                    name: {
                        given: "Luke",
                        family: "Harris"
                    },
                    email: "luke@test.com",
                    phone: "+447123456789",
                    address: {
                        postcode: "AB1 2CD",
                        lines: [
                            "123 any road",
                            "anytown"
                        ],
                        city: "anycity",
                        county: "Cambridgeshire",
                        country: "England",
                        location: {
                            longitude: 1,
                            latitude: 1
                        }
                    }
                }
            ]
        },
        applyMiddleware(routerMiddleware(history))
    );


