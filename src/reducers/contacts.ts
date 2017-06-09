import { CONTACTS_ACTIONS } from "actions/contacts";
import { Contact } from "models/contact";
import { Action } from "redux";

export default (state: Contact[] = [], action: any) => {
    switch(action.type) {
        case CONTACTS_ACTIONS.ADD_CONTACT:
            return [
                action.contact,
                ...state
            ];
        case CONTACTS_ACTIONS.REMOVE_CONTACT:
            return state.filter((contact, index) => {
                return index != action.contactIndex;
            });
        default:
            return state;
    }
}
