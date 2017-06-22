import * as React from 'react';
//import Axios from 'axios';

//import Content from '../components/Content';
//import Toolbar from '../components/Toolbar';

import Button from '../components/Button';
import { Contact } from '../models/Contact';

export interface AddContactFormProps {
  onNewContact: (contact: Contact) => void;
}

export interface AddContactFormState {
  given_name: string;
  family_name: string;
  email: string;
  phone: string;
  postcode: string;
  line1: string;
  line2?: string;
  line3?: string;
  city: string;
  county: string;
  country: string;

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
      given_name: 'Test',
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
      <form className="contact-address" onSubmit={event => {this.GetContact(this.state).then(contact => {
        this.props.onNewContact(contact)  
      });event.preventDefault();}}>
        <div className="address-item">
          <b className="label">First Name*</b>
          <span>
            <input type="text" value={this.state.given_name} onChange={event => this.setState({given_name: event.target.value})}/>
          </span>
        </div>

        <div className="address-item">
          <b className="label">Last Name*</b>
          <span>
            <input type="text" value={this.state.family_name} onChange={event => this.setState({family_name: event.target.value})}/>
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
            <input type="text" value={this.state.postcode} onChange={event => this.setState({postcode: event.target.value})}/>
          </span>
        </div>

        <input type="submit"/>
        <Button style="primary" onClick={() => {
          this.GetContact(this.state).then(this.props.onNewContact);
        }}>Add Contact</Button>
      </form>
    );
  }
}

export default AddContactForm;
