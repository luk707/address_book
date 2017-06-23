import * as React from 'react';
import Axios from 'axios';

//import Content from '../components/Content';
//import Toolbar from '../components/Toolbar';

import { Contact } from '../models/Contact';

export interface AddContactFormProps {
  onNewContact: (contact: Contact) => void;
}

export interface AddContactFormState {
  given_name: string;
  given_name_invalid?: string;
  family_name: string;
  family_name_invalid?: string;
  email: string;
  email_invalid?: string;
  phone: string;
  phone_invalid?: string;
  postcode: string;
  postcode_invalid?: string;
  line1: string;
  line1_invalid?: string;
  line2?: string;
  line2_invalid?: string;
  line3?: string;
  line3_invalid?: string;
  city: string;
  city_invalid?: string;
  county: string;
  county_invalid?: string;
  country: string;
  country_invalid?: string;

  longitude?: number;
  latitude?: number;

  getingData: boolean;
}

/**
 * Contact view.
 */
class AddContactForm extends React.Component<AddContactFormProps, AddContactFormState> {
  constructor (props: AddContactFormProps) {
    super(props);

    this.state = {
      given_name: '',
      family_name: '',
      email: '',
      phone: '',
      postcode: '',
      line1: '',
      line2: '',
      line3: '',
      city: '',
      county: '',
      country: '',

      getingData: false
    };
  }
  GetContact(state: AddContactFormState): Promise<Contact> {
    return Promise.resolve({
      index: -1,
      email: state.email,
      phone: state.phone,
      name: {
        given: state.given_name,
        family: state.family_name
      },
      address: {
        postcode: state.postcode,
        line1: state.line1,
        line2: state.line2,
        line3: state.line3,
        city: state.city,
        county: state.county,
        country: state.country
      }
    })
  }
  render() {
    return (
      <form className="contact-address" onSubmit={event => {if(!this.state.getingData) {this.GetContact(this.state).then(contact => {
        this.props.onNewContact(contact)  
      });}event.preventDefault();}}>
        <div className="address-item">
          <b className="label">First Name*</b>
          <span>
            <input type="text" className={this.state.given_name_invalid == undefined ? undefined : 'danger'} value={this.state.given_name} onChange={event => {
              if (event.target.value.length == 0) {
                this.setState({given_name_invalid: 'This field is required'});
              }
              else if (event.target.value.length <= 2) {
                this.setState({given_name_invalid: 'Name must be 3 characters or longer'});
              }
              else if (event.target.value.length >= 20) {
                this.setState({given_name_invalid: 'Name is too long'});
              }
              else {
                this.setState({given_name_invalid: undefined});
              }
              this.setState({given_name: event.target.value});
            }}/>
            {this.state.given_name_invalid == undefined ? null : <span>{this.state.given_name_invalid}</span>}
          </span>
        </div>

        <div className="address-item">
          <b className="label">Last Name*</b>
          <span>
            <input type="text" className={this.state.family_name_invalid == undefined ? undefined : 'danger'} value={this.state.family_name} onChange={event => {
              if (event.target.value.length == 0) {
                this.setState({family_name_invalid: 'This field is required'});
              }
              else if (event.target.value.length <= 2) {
                this.setState({family_name_invalid: 'Surname must be 3 characters or longer'});
              }
              else if (event.target.value.length >= 20) {
                this.setState({family_name_invalid: 'Surname is too long'});
              }
              else {
                this.setState({family_name_invalid: undefined});
              }
              this.setState({family_name: event.target.value});
            }}/>
            {this.state.family_name_invalid == undefined ? null : <span>{this.state.family_name_invalid}</span>}
          </span>
        </div>

        <div className="address-item">
          <b className="label">Email*</b>
          <span>
            <input type="text" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
          </span>
        </div>

        <div className="address-item">
          <b className="label">Phone*</b>
          <span>
            <input type="text" value={this.state.phone} onChange={event => this.setState({phone: event.target.value})}/>
          </span>
        </div>

        <div className="address-item">
          <b className="label">Address*</b>
          <span className="address">
            <span style={{paddingLeft:8}}>
              <input type="text" value={this.state.line1} onChange={event => this.setState({line1: event.target.value})}/>
            </span>
            <span style={{paddingLeft:8}}>
              <input type="text" value={this.state.line2} onChange={event => this.setState({line2: event.target.value})}/>
            </span>
            <span style={{paddingLeft:8}}>
              <input type="text" value={this.state.line3} onChange={event => this.setState({line3: event.target.value})}/>
            </span>
          </span>
        </div>

        <div className="address-item">
          <b className="label">City*</b>
          <span>
            <input type="text" value={this.state.city} onChange={event => this.setState({city: event.target.value})}/>
          </span>
        </div>

        <div className="address-item">
          <b className="label">County*</b>
          <span>
            <input type="text" value={this.state.county} onChange={event => this.setState({county: event.target.value})}/>
          </span>
        </div>
        
        <div className="address-item">
          <b className="label">Country*</b>
          <span>
            <input type="text" value={this.state.country} onChange={event => this.setState({country: event.target.value})}/>
          </span>
        </div>

        <div className="address-item">
          <b className="label">Postcode*</b>
          <span>
            <input type="text" className={this.state.postcode_invalid == undefined ? undefined : 'danger'} value={this.state.postcode} onChange={event => {
              if (event.target.value.length == 0) {
                this.setState({postcode_invalid: 'This field is required'});
              }
              else {
                Axios.get(`http://api.postcodes.io/postcodes/${event.target.value}/validate`).then(result => {
                  if (result.data.result) {
                    this.setState({postcode_invalid: undefined});
                  } else {
                    this.setState({postcode_invalid: 'Must be a valid UK postcode'});
                  }
                }).catch(error => {
                  this.setState({postcode_invalid: 'Error validating postcode'});
                })
              }
              this.setState({postcode: event.target.value});
            }}/>
            {this.state.postcode_invalid == undefined ? null : <span>{this.state.postcode_invalid}</span>}
          </span>
        </div>

        <input type="submit"/>
      </form>
    );
  }
}

export default AddContactForm;
