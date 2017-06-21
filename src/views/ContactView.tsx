import * as React from 'react';
import * as Gravatar from 'gravatar';
import './ContactView.css';

import Axios from 'axios';

import Content from '../components/Content';
import Toolbar from '../components/Toolbar';

import { Contact } from '../models/Contact';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibHVrNzA3IiwiYSI6ImNqNDcyYnYxdDAwOTgycXFxczMwdmY4d3UifQ.6xyohsBS5wU_LJhBGCswmg'
});

export interface ContactViewProps {
  contact: Contact;
}

export interface ContactViewState {
  postcode: string;
  loading: true;
  location: {
    longitude: number;
    latitude: number;
  };
}

/**
 * Contact view.
 */
class ContactView extends React.Component<ContactViewProps, ContactViewState> {
  constructor (props: ContactViewProps) {
    super(props);

    this.state = {
      postcode: props.contact.address.postcode,
      loading: true,
      location: {
        longitude: 0,
        latitude: 0
      }
    };

    if (props.contact.address.location !== undefined) {
      this.setState(state => ({
        ...state,
        loading: false,
        location: {
          longitude: 0,
          latitude: 0
        }
      }));
    } else {
    
      Axios.get(`http://api.postcodes.io/postcodes?q=${props.contact.address.postcode}`).then(response => {
        this.setState(state => ({
          ...state,
          location: {
            longitude: response.data.result[0].longitude,
            latitude: response.data.result[0].latitude
          }
        }));
      });

    }
  }
  render() {
    return (
      <div className="contact-view">
        <Toolbar
          back={{icon: 'chevron_left', label: 'Contacts'}}
          title={`${this.props.contact.name.given} ${this.props.contact.name.family}`}
        />
        <Content>
          <div className="heading">
            <img
              src={Gravatar.url(this.props.contact.email, {
                // Using window.devicePixelRatio ensures the image is sized correctly on mobile devices.
                s: Math.round(140 * window.devicePixelRatio).toString(),
                r: 'pg',
                d: 'retro'
              })}
              alt={this.props.contact.name.given}
            />
            <div className="contact-detail">
              <i className="material-icons">phone</i>
              <span>{this.props.contact.phone}</span>
            </div>
            <div className="contact-detail">
              <i className="material-icons">location_on</i>
              <span>Peterborough, UK</span>
            </div>
          </div>
          <div className="contact-address-container">
            <div className="contact-address">
              <div className="address-item">
                <b className="label">Name</b>
                <span>{this.props.contact.name.given} {this.props.contact.name.family}</span>
              </div>
              <div className="address-item">
                <b className="label">Email</b>
                <span>{this.props.contact.email}</span>
              </div>
              <div className="address-item">
                <b className="label">Address</b>
                <span className="address">
                  <span>{this.props.contact.address.line1}</span>
                  {this.props.contact.address.line2 ? <span>{this.props.contact.address.line1}</span> : null}
                  {this.props.contact.address.line3 ? <span>{this.props.contact.address.line3}</span> : null}
                  <span>{this.props.contact.address.city}</span>
                  <span>{this.props.contact.address.county}</span>
                  <span>{this.props.contact.address.country}</span>
                  <span>{this.props.contact.address.postcode}</span>
                </span>
              </div>
            </div>
          </div>
          <Map
            style="mapbox://styles/mapbox/satellite-v9"
            accessToken=""
          >
            <Marker
              coordinates={[this.state.location.longitude, this.state.location.latitude]}
              anchor="center"
            >
              <img
                style={{
                  borderRadius: 30,
                  width: 60,
                  height: 60
                }}
                src={Gravatar.url(this.props.contact.email, {
                  s: Math.round(60 * window.devicePixelRatio).toString(),
                  r: 'pg',
                  d: 'retro'
                })}
              />
            </Marker>
          </Map>
        </Content>
      </div>
    );
  }
}

export default ContactView;
