import { createStore, combineReducers } from "redux";
import { Contact } from "models/contact";
import ContactReducer from "reducers/contacts";
import { reducer as formReducer, FormState } from "redux-form";

export interface State {
    contacts: Contact[];
    form: FormState;
}

export default () => createStore<State>(
    combineReducers<State>({
        contacts: ContactReducer,
        form: formReducer
    }), {
        contacts: [
            {
                name: {
                    given: "Luke",
                    family: "Harris"
                },
                email: "luke@test.com",
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
        ],
        form: null
    });
