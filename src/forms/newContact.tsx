import * as React from "react";
import { Contact } from "models/contact";
import { AddContact } from "actions/contacts";
import { Component } from "component";
import renderField from "components/field";
import {
    reduxForm,
    FormProps,
    Field
} from "redux-form";
import required from "forms/validation/required";
import maxLength from "forms/validation/maxLength";
import minLength from "forms/validation/minLength";
import alphaNumeric from "forms/validation/alphanumeric";
import { push } from "react-router-redux";
import * as hash from "object-hash";

export interface FormData {
    given_name: string;
    family_name: string;
    email: string;
    postcode: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    county: string;
    country: string;
}

export interface State { }

export interface Actions {
    onAddContact: (contact: Contact) => void;
}

interface FieldProps {
    label: string;
    name: string;
}

const NewContactForm = Component<FormProps<FormData, {}, State>, State, Actions>(
    state => ({}),
    dispatch => ({
        onAddContact: (contact: Contact) => {
            dispatch(AddContact(contact));
            dispatch(push("/c"));
        }
    }),
    props =>
        <form onSubmit={props.handleSubmit(data => props.onAddContact({
                id: hash(data),
                name: {
                    given: data.given_name,
                    family: data.family_name
                },
                email: data.email,
                phone: "+447123456789",
                address: {
                    postcode: data.postcode,
                    lines: [
                        data.address_line_1,
                        data.address_line_2
                    ],
                    city: data.city,
                    county: data.county,
                    country: data.country,
                    location: {
                        longitude: 1,
                        latitude: 1
                    }
                }
            }))}>
            <Field
                name="given_name"
                type="text"
                component={renderField}
                label="First Name"
                validate={[required, maxLength(12), minLength(2)]}
                warn={alphaNumeric}/>
            <Field
                name="family_name"
                type="text"
                component={renderField}
                label="Last Name"
                validate={[required, maxLength(12), minLength(2)]}
                warn={alphaNumeric}/>
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={[required]}/>
            <Field
                name="postcode"
                type="text"
                component={renderField}
                label="Postcode"
                validate={[required]}/>
            <Field
                name="address_line_1"
                type="text"
                component={renderField}
                label="Address Line 1"
                validate={[required]}/>
            <Field
                name="address_line_2"
                type="text"
                component={renderField}
                label="Address Line 2"
                validate={[required]}/>
            <Field
                name="city"
                type="text"
                component={renderField}
                label="City"
                validate={[required]}/>
            <Field
                name="county"
                type="text"
                component={renderField}
                label="County"
                validate={[required]}/>
            <Field
                name="country"
                type="text"
                component={renderField}
                label="Country"
                validate={[required]}/>
            <button type="submit">Submit</button>
        </form>
);

export default reduxForm({
    form: "newContactForm"
})(NewContactForm);