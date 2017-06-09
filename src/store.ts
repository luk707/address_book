import { createStore, combineReducers } from "redux";
import { Contact } from "models/contact";
import ContactReducer from "reducers/contacts";

export interface State {
    contacts: Contact[];
}

export default () => createStore<State>(
    combineReducers<State>({
        contacts: ContactReducer
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
        ]
    });
